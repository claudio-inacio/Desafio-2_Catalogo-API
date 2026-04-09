import "./likeButton.css";

type LikeButtonProps = {
  isLiked: boolean;
  onToggle: () => void;
  ariaLabel?: string;
};

export function LikeButton({
  isLiked,
  onToggle,
  ariaLabel = "Adicionar aos favoritos",
}: LikeButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`con-like ${isLiked ? "is-liked" : ""}`}
      aria-pressed={isLiked}
      aria-label={ariaLabel}
    >
      <div className="checkmark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="outline"
          viewBox="0 0 24 24"
        >
           <path
            d="M12 20.7l-.6-.5C6.5 16 3 12.9 3 9.1 3 6.4 5.1 4.3 7.8 4.3c1.7 0 3.3.8 4.2 2.2.9-1.4 2.5-2.2 4.2-2.2C18.9 4.3 21 6.4 21 9.1c0 3.8-3.5 6.9-8.4 11.1l-.6.5z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="filled"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 20.7l-.6-.5C6.5 16 3 12.9 3 9.1 3 6.4 5.1 4.3 7.8 4.3c1.7 0 3.3.8 4.2 2.2.9-1.4 2.5-2.2 4.2-2.2C18.9 4.3 21 6.4 21 9.1c0 3.8-3.5 6.9-8.4 11.1l-.6.5z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="celebrate"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <polygon className="poly" points="10,10 20,20" />
          <polygon className="poly" points="10,50 20,50" />
          <polygon className="poly" points="20,80 30,70" />
          <polygon className="poly" points="90,10 80,20" />
          <polygon className="poly" points="90,50 80,50" />
          <polygon className="poly" points="80,80 70,70" />
        </svg>
      </div>
    </button>
  );
}