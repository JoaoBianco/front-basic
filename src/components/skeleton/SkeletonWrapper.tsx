import Skeleton from "./Skeleton";

const skeletons = Array.from({ length: 30 }, (_, i) => i);

export default function SkeletonWrapper() {
  return (
    <>
      {skeletons.map((skeleton) => (
        <Skeleton key={skeleton} />
      ))}
    </>
  );
}
