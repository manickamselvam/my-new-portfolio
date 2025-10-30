const PersonalProject = ({ tab }) => {
  return (
    <div className={tab === "Personal" ? "block " : "hidden"}>
      <section className="m-10">
        <div className="p-10 rounded-md flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">🚧 Coming Soon 🚧</h1>
            <p className="text-lg text-white/80 mb-6">
              I'm working hard to bring something amazing!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalProject;
