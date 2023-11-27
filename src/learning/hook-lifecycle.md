Trong React, không có khái niệm "Hook Lifecycle" như là một khái niệm riêng biệt. Thay vào đó, hooks được sử dụng để thực hiện các tác vụ nhất định trong các pha của lifecycle của một functional component. Dưới đây là một ví dụ sử dụng các hooks trong các pha khác nhau:

import React, { useState, useEffect, useMemo, useCallback } from 'react';

const HookLifecycleExample = () => {
  // Pha Mounting
  const [data, setData] = useState('Initial Data');

  useEffect(() => {
    console.log('useEffect (componentDidMount)');
    // Thực hiện các tác vụ sau khi component đã được render lần đầu tiên.
    return () => {
      console.log('useEffect Cleanup (componentWillUnmount)');
      // Thực hiện các tác vụ trước khi component bị unmounted.
    };
  }, []); // Mảng rỗng để đảm bảo chỉ chạy một lần sau khi mount

  // Pha Updating
  useEffect(() => {
    console.log('useEffect (componentDidUpdate)');
    // Thực hiện các tác vụ sau mỗi lần render.
  }, [data]); // Chỉ chạy khi giá trị data thay đổi

  // Pha Memoization (tối ưu performance)
  const memoizedValue = useMemo(() => {
    console.log('useMemo');
    // Thực hiện các tính toán và trả về một giá trị được memoized.
    return data.toUpperCase();
  }, [data]); // Chỉ tính toán lại khi giá trị data thay đổi

  // Pha Callback Memoization (tối ưu performance cho hàm callback)
  const handleClick = useCallback(() => {
    console.log('useCallback');
    // Thực hiện các hành động khi nút được nhấn.
  }, []); // Chỉ tạo lại hàm khi dependencies thay đổi

  // Render
  console.log('Render');
  return (
    <div>
      <p>{data}</p>
      <button onClick={() => setData('New Data')}>Change Data</button>
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default HookLifecycleExample;

Trong ví dụ trên:

Mounting Phase:
useState để khởi tạo state.
useEffect được sử dụng với mảng dependencies rỗng để thực hiện các tác vụ sau khi component đã được render lần đầu tiên.
Updating Phase:
useEffect được sử dụng với mảng dependencies chứa data để thực hiện các tác vụ sau mỗi lần render khi giá trị data thay đổi.
Memoization Phase:
useMemo được sử dụng để tối ưu performance bằng cách memoize một giá trị được tính toán.
Callback Memoization Phase:
useCallback được sử dụng để tối ưu performance bằng cách memoize một hàm callback.
Dùng các hooks như useEffect, useState, useMemo, và useCallback giúp chúng ta thực hiện các tác vụ trong các pha khác nhau của lifecycle mà không cần sử dụng class component.


---------
The behaviors without the dependency array and with an empty [] dependency array are different:

useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
We’ll take a close look at what “mount” means in the next step.