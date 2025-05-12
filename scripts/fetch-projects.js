const fs = require('fs');
const axios = require('axios');

const ORG = 'Skunkworks-Digital';
const OUT_FILE = 'public/projects.json';

const headers = {
  'User-Agent': 'GitHubAction',
  // Optional: 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
};

(async () => {
  try {
    const reposRes = await axios.get(`https://api.github.com/orgs/${ORG}/repos`, { headers });
    const repoData = [];

    for (const repo of reposRes.data) {
      const contribsRes = await axios.get(repo.contributors_url, { headers });

      repoData.push({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        archived: repo.archived,
        contributors: contribsRes.data.slice(0, 3).map(c => ({
          login: c.login,
          avatar_url: c.avatar_url,
          html_url: c.html_url
        }))
      });
    }

    fs.writeFileSync(OUT_FILE, JSON.stringify(repoData, null, 2));
    console.log(`✅ ${repoData.length} projects saved to ${OUT_FILE}`);
  } catch (err) {
    console.error('❌ Failed to fetch project data:', err.message);
    process.exit(1);
  }
})();
