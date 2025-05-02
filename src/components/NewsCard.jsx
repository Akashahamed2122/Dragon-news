import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    author,
    rating,
    total_view,
    details,
    tags,
  } = news;

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 space-y-4">
      {/* Author Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <button className="flex gap-8">
          <CiBookmark />
          <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt="News"
        className="w-full h-60 object-cover rounded-xl"
      />

      {/* Details */}
      <p className="text-gray-600">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <span className="text-blue-600 font-semibold cursor-pointer ml-1">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span key={idx} className="badge badge-outline text-sm">
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-700 font-medium">
            {rating.number}.0
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
        
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
