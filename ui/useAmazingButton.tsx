import { useState } from 'react';

export function useAmazingButton(initial: number){
    
    const [counter, setCounter] = useState<number>(initial);

    return {counter}
    }
    