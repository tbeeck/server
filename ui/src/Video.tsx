import React from 'react';

export const Video = ({src, className, muted}: {src: MediaStream; className?: string; muted: boolean}) => {
    const [element, setElement] = React.useState<HTMLVideoElement | null>(null);

    React.useEffect(() => {
        if (element) {
            element.srcObject = src;
            element.play().catch((e) => console.log('Could not play preview video', e));
        }
    }, [element, src]);

    return <video muted={muted} ref={setElement} className={className}/>;
};
