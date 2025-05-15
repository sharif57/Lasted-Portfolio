import DesignProcess from "@/components/Desing";
import WorkExperience from "@/components/Experience";
import Tech from "@/components/Tech";

export default function AboutUs() {
  return (
    <div className="mt-28">
      <Tech />
      <WorkExperience />
      <DesignProcess />
    </div>
  );
}
