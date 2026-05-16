export interface Link {
  id: string;
  title: string;
  url: string;
  updatedAt: string;
}

export const dummyLinks: Link[] = [
  {
    id: "1",
    title: "Instagram",
    url: "https://www.instagram.com/",
    updatedAt: "2024-03-20T10:00:00Z",
  },
  {
    id: "2",
    title: "YouTube",
    url: "https://www.youtube.com/",
    updatedAt: "2024-03-20T11:30:00Z",
  },
  {
    id: "3",
    title: "Blog",
    url: "https://blog.naver.com/",
    updatedAt: "2024-03-21T09:15:00Z",
  },
  {
    id: "4",
    title: "GitHub",
    url: "https://github.com/",
    updatedAt: "2024-03-21T14:20:00Z",
  },
  {
    id: "5",
    title: "포트폴리오",
    url: "https://my-portfolio.com",
    updatedAt: "2024-03-22T08:00:00Z",
  },
];
