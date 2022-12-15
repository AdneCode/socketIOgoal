import { useState } from 'react';
import { Button } from './Button';

export function JoinPage() {
    const [name, setName] = useState('');
    return (
        <>
            <Button name={name} />
            <input
                placeholder={'name'}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </>
    );
}
