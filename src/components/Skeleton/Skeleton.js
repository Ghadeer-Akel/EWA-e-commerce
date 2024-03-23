const Skeleton = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-image" />
      <div className="skeleton-details">
        <div className="skeleton-title" />
        <div className="skeleton-category" />
        <div className="skeleton-flex">
          <div className="skeleton-price" />
          <div className="skeleton-button" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
