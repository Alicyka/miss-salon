import { useEffect } from 'react';

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

export const usePageMeta = (title: string, description: string, image?: string) => {
  useEffect(() => {
    document.title = title;

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', window.location.href);

    if (image) {
      setMeta('property', 'og:image', window.location.origin + image);
    }
  }, [title, description, image]);
};