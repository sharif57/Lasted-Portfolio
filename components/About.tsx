"use client"

interface AboutMeProps {
  scrollY: number
}

export default function AboutMe({ scrollY }: AboutMeProps) {
  // Calculate opacity based on scroll position
  // Start fading in at 100px scroll, complete by 300px
  const calculateOpacity = () => {
    if (scrollY < 100) return 0.2 // Initial opacity (light gray)
    if (scrollY > 300) return 1 // Final opacity (black)

    // Linear interpolation between 100px and 300px scroll
    return 0.2 + ((scrollY - 100) * 0.8) / 200
  }

  const opacity = calculateOpacity()

  return (
    <section className="mb-20">
      <h2 className="flex items-center text-green-500 font-medium mb-8">
        <span className="mr-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 0L10.2 5.8L16 6.8L12 11.3L13.1 17L8 14.3L2.9 17L4 11.3L0 6.8L5.8 5.8L8 0Z"
              fill="currentColor"
            />
          </svg>
        </span>
        ABOUT ME
      </h2>

      <p className="text-3xl font-normal leading-relaxed">
        I&apos;m Devraj Chatribin, with over 4+ years of experience in design & development with strong focus on
        producing high quality & impactful digital experiences. I have worked with{" "}
        <span
          style={{
            color: `rgba(0, 0, 0, ${opacity})`,
            transition: "color 0.1s ease-out",
          }}
        >
          some of the most innovative industry leaders to help build their top-notch products.
        </span>
      </p>
    </section>
  )
}
