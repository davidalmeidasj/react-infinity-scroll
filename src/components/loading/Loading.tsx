import React, {ReactNode} from 'react';
import './Loading.scss';

interface LoadingProps {
    children: ReactNode;
    active: Boolean;
}

const Loading = ({ children, active }: LoadingProps) => {
    return active ? <div className="loading-dot"/> : children;
};

export default Loading;
