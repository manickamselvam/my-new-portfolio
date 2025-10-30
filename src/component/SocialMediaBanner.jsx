import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

/**
 * Props:
 * - email: string (e.g. "you@domain.com")
 * - linkedin: url string
 * - github: url string
 * - size: icon size (optional, default 22)
 */
export default function SocialMediaBanner({
  email = "nagamanickam@yahoo.com",
  linkedin = "https://www.linkedin.com/in/nagamanickam-selvam",
  github = "https://github.com/manickamselvam",
  size = 22,
}) {
  return (
    <div className="w-full flex items-center py-6">
      <div className="flex items-center gap-4 bg-white/60 backdrop-blur-md border border-gray-200 rounded-xl px-4 py-2 shadow-sm">
        {/* Email */}
        <a
          href={`mailto:${email}`}
          aria-label={`Send email to ${email}`}
          className="group inline-flex items-center gap-2 px-3 py-2 rounded-md transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <span
            className="inline-flex items-center justify-center p-2 rounded-md
                       bg-white border border-gray-100 shadow-sm group-hover:translate-y-0.5 transition-transform"
          >
            <FiMail size={size} className="text-gray-700" />
          </span>
          <span className="hidden sm:inline text-sm text-gray-700">Email</span>
        </a>

        <div className="w-px h-6 bg-gray-200" />

        {/* LinkedIn */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn profile"
          className="group inline-flex items-center gap-2 px-3 py-2 rounded-md transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300"
        >
          <span className="inline-flex items-center justify-center p-2 rounded-md bg-white border border-gray-100 shadow-sm">
            <FiLinkedin size={size} className="text-sky-600" />
          </span>
          <span className="hidden sm:inline text-sm text-gray-700">
            LinkedIn
          </span>
        </a>

        {/* GitHub */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub profile"
          className="group inline-flex items-center gap-2 px-3 py-2 rounded-md transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <span className="inline-flex items-center justify-center p-2 rounded-md bg-white border border-gray-100 shadow-sm">
            <FiGithub size={size} className="text-gray-800" />
          </span>
          <span className="hidden sm:inline text-sm text-gray-700">GitHub</span>
        </a>
      </div>
    </div>
  );
}
