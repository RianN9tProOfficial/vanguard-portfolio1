export type BlogEntry = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
};

export const blogEntries: BlogEntry[] = [
  {
    slug: 'mrbeastscam',
    title: 'The Massive MrBeast Casino Scam Exposed',
    excerpt: 'How fake platforms weaponize trust, celebrity influence, and stolen accounts at scale.',
    date: 'November 8, 2025',
    readTime: '8 min read',
    content: [
      'Large scam operations increasingly rely on familiar faces, fake authority, and cloned brand trust to accelerate conversion funnels.',
      'In this campaign, fake promotions, spoofed social accounts, and urgency loops were used to push users toward fraudulent casino deposits.',
      'The pattern is consistent: legitimacy theater first, extraction second. The most effective defense is verification discipline and slower decisions under pressure.',
    ],
  },
  {
    slug: 'minecraft-verification-scam',
    title: 'The Minecraft Verification Scam',
    excerpt: 'How fake Discord servers are stealing player accounts through staged verification flows.',
    date: 'January 12, 2026',
    readTime: '10 min read',
    content: [
      'Verification scams disguise credential theft as community onboarding. The interface appears normal, but the intent is account takeover.',
      'Attackers use fake moderators, mirrored channels, and cloned bots to create social proof before requesting authentication steps outside official flows.',
      'A reliable rule: legitimate communities do not require token sharing, unusual OAuth redirects, or account data submission via DMs.',
    ],
  },
  {
    slug: 'discord-nitro-generator-scam',
    title: 'The Truth About Discord Nitro Generators',
    excerpt: 'Why free Nitro promises are usually malware in disguise.',
    date: 'August 14, 2025',
    readTime: '12 min read',
    content: [
      'Nitro generator pages are engineered around scarcity and reward psychology. They front-load excitement, then introduce executable payloads.',
      'Most campaigns deploy clipboard hijackers, credential stealers, or browser session theft immediately after download execution.',
      'Any “free premium” funnel that asks for binaries, disabled antivirus, or external verification should be treated as hostile by default.',
    ],
  },
];
