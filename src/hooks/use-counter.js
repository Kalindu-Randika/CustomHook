import { useEffect, useState } from "react";

const useCounter = (initialValue = 0, addition) => {
    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        const interval = setInterval(() => {
            // Use the addition prop to determine whether to increment or decrement the counter
            if (addition) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [addition]); // Make sure to include addition as a dependency if it can change

    return counter;
};

export default useCounter;
