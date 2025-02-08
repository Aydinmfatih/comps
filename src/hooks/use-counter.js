import {useState,useEffect} from 'react'


function useCounter(initialCount = 0) {
            const [count, setCount] = useState(initialCount);
            useEffect(() => {
              console.log(count);
            }, [count]);
            const increment = () => {
              setCount(count + 1);
            };
            return { count, increment };
          }

export default useCounter