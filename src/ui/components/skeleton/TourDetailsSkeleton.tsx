import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const TourDetailsSkeleton = () => {
  return (
    <>
      {/* hero */}
      <SkeletonTheme baseColor="#55c57a" highlightColor="#43a263">
        <section
          className="relative 
            max-md:h-[72svh]
            md:h-[calc(100svh-var(--header-h))]
            u-clip-path-img
          "
        >
          <div className="w-full h-full">
            <div
              className=" 
                w-full h-full 
                u-bg-gradient-secondary 
                opacity-85
                flex justify-center items-center
              "
            >
              <SkeletonTheme baseColor="#55c57a" highlightColor="#43a263">
                <div className="z-[9999] -mt-32 flex flex-col items-center space-y-8">
                  <Skeleton width={240} height={80} />
                  <SkeletonTheme baseColor="#f3f3f3" highlightColor="#ecebeb">
                    <div className="flex items-center space-x-4">
                      <Skeleton width={100} height={30} />
                      <Skeleton width={100} height={30} />
                    </div>
                  </SkeletonTheme>
                </div>
              </SkeletonTheme>
            </div>
          </div>
        </section>
      </SkeletonTheme>
      {/* middle */}
      <section
        className="grid 
          items-center 
          max-md:min-h-[90vh]
          max-lg:min-h-[95vh]
          max-xl:min-h-[80vh]
          xl:h-[80vh]
          xl:max-h-[80vh]
          max-md:grid-cols-1 
          md:grid-cols-2 
          max-sm:-mt-16 
          max-md:-mt-24
          md:-mt-8
          md:gap-x-8
        "
      >
        {/* left */}
        <div
          className="grid justify-center items-center
            max-md:pt-16
            md:py-8
            h-[100%] 
            w-full
            grid-rows-2 
            lg:gap-y-2 
            bg-stone-200
          "
        >
          <div className="flex flex-col space-y-4 items-start justify-center">
            <h2 className="h2">Quick facts</h2>
            {/* Skeleton for OverviewBox */}
            <div className="flex items-center space-x-4">
              <Skeleton width={30} height={30} />
              <Skeleton width={100} />
              <Skeleton width={100} />
            </div>
            {/* End of Skeleton */}
            {/* Skeleton for OverviewBox */}
            <div className="flex items-center space-x-4">
              <Skeleton width={30} height={30} />
              <Skeleton width={100} />
              <Skeleton width={100} />
            </div>
            {/* End of Skeleton */}
            {/* Skeleton for OverviewBox */}
            <div className="flex items-center space-x-4">
              <Skeleton width={30} height={30} />
              <Skeleton width={100} />
              <Skeleton width={100} />
            </div>
            {/* End of Skeleton */}
          </div>

          <div className="space-y-2">
            <h2 className="h2">Your tour guides</h2>
            {/* Skeleton for OverviewBox */}
            <div className="flex items-center space-x-4">
              <Skeleton width={30} height={30} />
              <Skeleton width={100} />
              <Skeleton width={100} />
            </div>
            {/* End of Skeleton */}
            {/* Skeleton for OverviewBox */}
            <div className="flex items-center space-x-4">
              <Skeleton width={30} height={30} />
              <Skeleton width={100} />
              <Skeleton width={100} />
            </div>
            {/* End of Skeleton */}
            {/* Skeleton for OverviewBox */}
            <div className="flex items-center space-x-4">
              <Skeleton width={30} height={30} />
              <Skeleton count={2} width={100} />
            </div>
            {/* End of Skeleton */}
          </div>
        </div>

        {/* right */}
        <div className="-mt-16 w-5/6 pl-16">
          <h2 className="h2">About Tour</h2>
          {/* Skeleton for Description */}
          <SkeletonTheme baseColor="#f3f3f3" highlightColor="#ecebeb">
            <Skeleton count={4} />
          </SkeletonTheme>
          {/* End of Skeleton */}
        </div>
      </section>
    </>
  )
}

export default TourDetailsSkeleton
