import React from "react";

interface IQuoteCardProps {
    quote: Quote;
    onFavoriteToggle?: (quoteId: string, isFavorite: boolean) => void;
    onClick?: (quote: Quote) => void;
    showBookInfo?: boolean;
    className?: string; 
}

/**
 * QuoteCard Component
 * Displays a single quote with favorite functionality
 * 
 * @example
 * <QuoteCard 
 *   quote={quote} 
 *   onFavoriteToggle={handleFavorite}
 *   onClick={handleClick}
 * />
 */

const QuoteCard: React.FC<IQuoteCardProps>= ({
    quote,
    onFavoriteToggle,
    onClick,
    showBookInfo = false,
    className = ''
}) => {

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onFavoriteToggle?.(quote.id, !quote.isFavorite || false);
    }

    const handleCardClick = () => {
        onClick?.(quote);
    };

    return (
        <div className={`relative bg-white rounded-lg shadow-md p-6 
            hover:shadow-lg transition-shadow duration-300 
            cursor-pointer border border-gray-200
            ${className}`}
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleCardClick();
                }
            }}
            aria-label={`Quote by ${quote.author}`}
            >
            
        </div>
    );
}

export default QuoteCard;