import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
    className?: string;
}

const BackButton = ({ className = '' }: BackButtonProps) => {
    const navigate = useNavigate();

    return (
        <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className={`gap-2 pl-0 hover:bg-transparent hover:text-blue-600 dark:hover:text-blue-400 -ml-2 ${className}`}
        >
            <ArrowLeft size={20} />
            Back
        </Button>
    );
};

export default BackButton;
