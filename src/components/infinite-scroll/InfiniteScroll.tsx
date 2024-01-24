import React, { useEffect, useCallback } from 'react';

interface InfiniteScrollProps {
    onBottomHit: () => void;
    isLoading: boolean;
    scrollableRef: React.RefObject<HTMLUListElement>;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ onBottomHit, isLoading, scrollableRef }) => {
    const handleScroll = useCallback(() => {
        if (isLoading || !scrollableRef.current) return;

        const { scrollTop, scrollHeight, clientHeight } = scrollableRef.current;
        if (scrollTop + clientHeight >= scrollHeight) {
            onBottomHit();
        }
    }, [onBottomHit, isLoading, scrollableRef]);

    useEffect(() => {
        const element = scrollableRef.current;
        if (element) {
            element.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (element) {
                element.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll, scrollableRef]);

    return null;
};

export default InfiniteScroll;
