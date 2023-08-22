// from https://dev.to/m19v/how-to-add-giscus-comments-to-docusaurus-439h

import React from 'react';
import GiscusComponent from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function Giscus() {
  const { colorMode } = useColorMode();

  return (
    <GiscusComponent
      repo="live-codes/blog.livecodes.io"
      repoId="R_kgDOJeLGUA"
      category="Announcements"
      categoryId="DIC_kwDOJeLGUM4CYwxk"
      mapping="url"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}
