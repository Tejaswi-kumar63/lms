import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';

const CourseCard = ({ course }) => {
    const { currency, calculateRating } = useContext(AppContext);

    // Ensure course is defined before using its properties
    if (!course) {
        return <div className="border border-gray-500/30 p-4 rounded-lg">Loading course...</div>;
    }

    return (
        <Link 
            onClick={() => scrollTo(0, 0)} 
            to={course._id ? `/course/${course._id}` : '#'} 
            className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg"
        >
            <img className="w-full" src={course.courseThumbnail || assets.placeholder} alt="Course Thumbnail" />
            <div className="p-3 text-left">
                <h3 className="text-base font-semibold">{course.courseTitle || 'Untitled Course'}</h3>
                <p className="text-gray-500">{course.educator?.name || 'Unknown Educator'}</p>

                <div className="flex items-center space-x-2">
                    <p>{calculateRating ? calculateRating(course) : 'N/A'}</p>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                className="w-3.5 h-3.5"
                                src={i < Math.floor(calculateRating ? calculateRating(course) : 0) ? assets.star : assets.star_blank}
                                alt="Star"
                            />
                        ))}
                    </div>
                    <p className="text-gray-500">({course.courseRatings?.length || 0})</p>
                </div>

                <p className="text-base font-semibold text-gray-800">
                    {currency}
                    {(course.coursePrice ? (course.coursePrice - (course.discount || 0) * course.coursePrice / 100) : 0).toFixed(2)}
                </p>
            </div>
        </Link>
    );
};

export default CourseCard;
