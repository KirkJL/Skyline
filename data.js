const plans = {};

const categories = ["Fitness", "Gaming", "Blogging"];

const subcategories = {
  Fitness: ["Yoga", "Weightlifting", "Running", "Home Workouts", "Nutrition"],
  Gaming: ["PC", "Console", "Mobile", "Esports", "Streaming"],
  Blogging: ["Tech", "Lifestyle", "Travel", "Food", "Personal Development"]
};

const platforms = ["YouTube", "Twitch", "TikTok", "Instagram", "Twitter"];

const contentTypes = ["Video", "Image", "Story", "Live Stream", "Article"];

const postTimes = ["Morning", "Afternoon", "Evening", "Night"];

categories.forEach(category => {
  subcategories[category].forEach(sub => {
    platforms.forEach(platform => {
      contentTypes.forEach(type => {
        postTimes.forEach(time => {
          const key = `${category}_${sub}_${platform}_${type}_${time}`;
          plans[key] = `Create a ${type} for ${platform} in the ${time} about ${sub} (${category}). Use trending hashtags and a catchy hook!`;
        });
      });
    });
  });
});
