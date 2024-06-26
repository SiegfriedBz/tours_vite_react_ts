import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const ChartSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#f3f3f3" highlightColor="#ecebeb">
      <div
        className="rounded-lg 
        overflow-hidden 
        shadow-lg 
        bg-white 
        w-full
        "
      >
        <span className="lg:hidden">
          <Skeleton width="100%" height={340} />
        </span>
        <span className="max-lg:hidden">
          <Skeleton width="32rem" height={340} />
        </span>

        <div className="p-4 flex items-center space-x-2">
          <Skeleton width={30} height={30} />
          <Skeleton width={100} height={30} />
        </div>
      </div>
    </SkeletonTheme>
  )
}

export default ChartSkeleton
