// Generated automatically via scripts/build-search.mjs. Do not edit manually.

export const staticSearchDataset: Record<string, Array<{ title: string; category: string; url: string; content: string }>> = {
  "en": [
    {
      "title": "Build automated design and manufacturing pipeline",
      "category": "Example Category",
      "url": "/en/adrs/example-adr/decisions/build-automated-design-manufacturing-pipeline",
      "content": ""
    },
    {
      "title": "Enable Commoditization of all physical and digital products and tools",
      "category": "Example Category",
      "url": "/en/adrs/example-adr/decisions/enable-commoditization",
      "content": "MIT License Wiki"
    },
    {
      "title": "Use 3D printing for production",
      "category": "Example Category",
      "url": "/en/adrs/example-adr/decisions/use-3d-printing-for-production",
      "content": ""
    },
    {
      "title": "Use nano-assembly for production",
      "category": "Example Category",
      "url": "/en/adrs/example-adr/decisions/use-nano-assembly-for-production",
      "content": ""
    },
    {
      "title": "Example ADR",
      "category": "Example Category",
      "url": "/en/adrs/example-adr",
      "content": "Page"
    },
    {
      "title": "Company",
      "category": "",
      "url": "/en/companies/company",
      "content": "Company This is the Company page"
    },
    {
      "title": "Companies",
      "category": "",
      "url": "/en/companies",
      "content": "Companies"
    },
    {
      "title": "SpaceX",
      "category": "",
      "url": "/en/companies/spacex",
      "content": "SpaceX This is the SpaceX page"
    },
    {
      "title": "Tesla",
      "category": "",
      "url": "/en/companies/tesla",
      "content": "Tesla This is the Tesla page"
    },
    {
      "title": "xAI",
      "category": "",
      "url": "/en/companies/xai",
      "content": "xAI This is the xAI page"
    },
    {
      "title": "Comprehensive Math Formula Showcase & Test Library",
      "category": "",
      "url": "/en/math-mdx-page/index",
      "content": "Comprehensive Math Formula Showcase Test Library This document provides a triple rendering configuration test sheet to verify naked formulas in mode naked formulas in moonlight color mode and custom card components 1 Core Integration Demonstration Basic Definite Integral Default Style Moonlight II Style MathBlock Card Style Shiki Code Block Alternative math int ^ ^2 dx 2 Physics Quantum Mechanics Examples Standard Einstein Mass Energy Equivalence Default Style Moonlight II Style MathBlock Card Style Time Dependent Schrödinger Formulation Default Style Moonlight II Style MathBlock Card Style 3 Advanced Custom Macro Styling Color Maps Inline Token Highlighting Default Style Moonlight II Style MathBlock Card Style Complex Vector Boundaries Default Style Moonlight II Style MathBlock Card Style Palette Variable Layout Definition Default Style Moonlight II Style MathBlock Card Style Chemical Formula Processing Default Style Moonlight II Style MathBlock Card Style 4 Standard Mathematical Structures Quadratic Equation Formula Default Style Moonlight II Style MathBlock Card Style Infinite Basel Problem Series Default Style Moonlight II Style MathBlock Card Style Multi Variable Double Integrals Default Style Moonlight II Style MathBlock Card Style 5 High Complexity Core System Matrices Linear Systems Vectors Transformation Matrix Default Style Moonlight II Style MathBlock Card Style 3x3 Matrix Determinants Evaluation Default Style Moonlight II Style MathBlock Card Style Multi Conditional Piecewise Functions Default Style Moonlight II Style MathBlock Card Style Multi step Derivation Proof Alignments Default Style Moonlight II Style MathBlock Card Style 6 Advanced Physics Field Equations Full Wave Quantum Hamiltonians Default Style Moonlight II Style MathBlock Card Style Boltzmann Statistical Configuration Entropy Default Style Moonlight II Style MathBlock Card Style Classical Limit Derivative Foundations Default Style Moonlight II Style MathBlock Card Style Classical Electrodynamics Maxwell' Partial Differential Fields Default Style Moonlight II Style MathBlock Card Style"
    },
    {
      "title": "Math Mdx Page",
      "category": "",
      "url": "/en/math-mdx-page",
      "content": "MathBlock"
    },
    {
      "title": "Welcome to my Markdown page!",
      "category": "",
      "url": "/en/md-page/index",
      "content": "Welcome to my Markdown page! This is some bold and italics text This is a list in markdown One Two Three This is a link https //rd center vercel app"
    },
    {
      "title": "Physics Report",
      "category": "",
      "url": "/en/mdx-page/index",
      "content": "Editor Grade Highlighting Enjoy the accuracy and granularity of VS Code' syntax highlighting engine and the popularity of its themes ecosystem — use any VS Code theme you want! Line Numbers and Line Highlighting Draw attention to a particular line of code jsx showLineNumbers MyComponent Word Highlighting Draw attention to a particular word or series of characters jsx /floatingStyles/ MyComponent Inline Code Highlighting The result of 1 2 3 join ' ' is '1 2 3' Context Aware Inline Code For instance if you had the following code block js showLineNumbers getStringLength str When we refer to getStringLength as a plain variable we can color it as a Same with or str vs str etc This allows you to semantically tie inline code with the nearest code block it' referring to Table of Contents Installation installation Usage usage Styles styles Options options grid grid theme theme keepBackground keepbackground bypassInlineCode bypassInlineCode defaultLang defaultlang transformers transformers Meta Strings meta strings Highlight Lines highlight lines Group Highlighted Lines By Id group highlighted lines by id Highlight Chars highlight chars Group Highlighted Chars By Id group highlighted chars by id Highlight Inline Code highlight inline code Highlight Plain Text highlight plain text Titles titles Captions captions Line Numbers line numbers Multiple Themes Dark and Light Mode multiple themes dark and light mode Visitor Hooks visitor hooks Custom Highlighter custom highlighter Server Component react server component Installation Install via your terminal shell npm install rehype pretty code shiki This package is ESM only and currently supports shiki ^1 0 0 To use the latest version in Next js ensure your config file is ESM next config mjs Here' a full example rehype pretty code/website/next config mjs https //github com/atomiks/rehype pretty code/blob/master/website/next config mjs Usage The following works both on the server and on the client js /rehypePrettyCode/ main main Note that unified v11 is used as a dependency internally Ensure your unified version is compatible MDX The following example shows how to use this package with Next js js title \"next config mjs\" @ @ withMDX nextConfig Disable the mdxRs option if Rehype plugins do not work Styles This library is unstyled This means it does not provide a CSS file that applies styling by Rather it provides logical attributes that you use to apply the styling yourself For instance the following CSS prevents overflow and adds padding css pre pre data line Features including highlighted lines chars and line numbers expose data attributes that enable you to add your own styling which are explained below Options ts tokensMap? Record transformers? ShikiTransformer filterMetaString? str string string getHighlighter? options BundledHighlighterOptions onVisitLine? element LineElement void onVisitHighlightedLine? element LineElement void onVisitHighlightedChars? element CharsElement id string undefined void onVisitTitle? element Element void onVisitCaption? element Element void grid A grid style is present by which allows line highlighting to span the entire width of a horizontally scrollable code block You can disable this setting if necessary js theme The theme is github dark dimmed Shiki has a bunch of pre packaged themes https //shiki style/themes themes which can be specified as a plain string js You can use your own theme as well by passing the theme JSON js keepBackground To apply a custom background instead of inheriting the background from the theme js defaultLang When no code language is specified inline code or code blocks will not be themed nor will the background which may appear incongruous with others In this case you can specify a language js Or you can also specify languages for inline code and code blocks separately js transformers Transformers https //shiki style/guide/transformers transformers are a Shiki native way to manipulate the hAST tree of the code blocks and further extend the behavior of this plugin The @shikijs/transformers https //npm im/@shikijs/transformers package provides some useful transformers js Meta Strings Code blocks are configured via the meta string on the top codeblock fence If your library also parses code blocks' meta strings it may cause conflicts https //github com/atomiks/rehype pretty code/issues/52 with rehype pretty code This option allows you to filter out some part of the meta string before the library starts parsing it js Highlight Lines Place a numeric range inside md js Styling The line receives a data highlighted line attribute that enables you to style via CSS Group Highlighted Lines By Id Place an id after after the This allows you to color or style lines differently based on their id md js a Styling The line receives a data highlighted line id \" \" attribute that enables you to style via CSS Highlight Chars You can use either md js /carrot/ Or \" as a delimiter md js \"carrot\" Different segments of chars can also be highlighted md js /carrot/ /apple/ Styling The chars receives a data highlighted chars attribute to style via CSS To highlight only the third to fifth instances of carrot a numeric range can be placed after the last md js /carrot/3 5 Highlight only the third to fifth instances of carrot and any instances of apple md js /carrot/3 5 /apple/ Group Highlighted Chars By Id Place an id after after the chars This allows you to color chars differently based on their id md js /age/ /name/ /setAge/ /setName/ /50/ i /\"Taylor\"/ i js /age/ /name/ /setAge/ /setName/ /50/ i /\"Taylor\"/ i Styling The chars receives a data chars id \" \" attribute to style via CSS Highlight Inline Code Append to the end of inline code to highlight it like a regular code block md This is an array 1 2 3 of numbers 1 through 3 Highlight Plain Text Append to the end of the inline code to highlight it based on a token specified in your VS Code theme Tokens start with a to differentiate them from a language md The name of the is getStringLength You can create a of tokens to shorten this usage throughout your docs js md The name of the is getStringLength Titles Add a file title to your code block with text inside double quotes \"\" md js title \" \" Captions Add a caption underneath your code block with text inside double quotes \"\" md js caption \" \" Line Numbers CSS counters can be used to add line numbers css code code data line before code data line numbers max digits \"2\" data line before code data line numbers max digits \"3\" data line before If you want to conditionally show them use showLineNumbers md js showLineNumbers Styling will have attributes data line numbers and data line numbers max digits \" \" If you want to start line numbers at a specific number use showLineNumbers md js showLineNumbers Multiple Themes Dark and Light Mode Pass your themes to theme where the keys represent the color mode js Now use the following CSS to display the variable colors — if a space is found in the theme name then CSS variable keys based on the object are available more info https //shiki style/guide/dual themes light dark dual themes scss code data theme \" \" code data theme \" \" span @media prefers color scheme dark The and elements will have the data attribute data theme \" themes\" listing each theme value space separated html Visitor Hooks To customize the HTML output you can use visitor callback hooks to manipulate the hAST elements https //github com/syntax tree/hast element directly js onVisitHighlightedLine element onVisitHighlightedChars element onVisitTitle element onVisitCaption element Custom Highlighter To completely configure the highlighter use the getHighlighter option This is helpful if you' like to configure other Shiki options such as langs js Server Component The usage usage works directly in Server Components Here' an example tsx title \"code tsx\" Code highlightCode code string Then Page"
    }
  ],
  "de": [
    {
      "title": "Aufbau eines automatisierten Design- und Fertigungspipelines",
      "category": "example",
      "url": "/de/adrs/example-adr/decisions/build-automated-design-manufacturing-pipeline",
      "content": ""
    },
    {
      "title": "Kommoditisierung aller physischen und digitalen Produkte und Werkzeuge ermöglichen",
      "category": "example",
      "url": "/de/adrs/example-adr/decisions/enable-commoditization",
      "content": "MIT License Wiki"
    },
    {
      "title": "Nutzung von 3D-Druck für die Produktion",
      "category": "example",
      "url": "/de/adrs/example-adr/decisions/use-3d-printing-for-production",
      "content": ""
    },
    {
      "title": "Nutzung der Nano-Montage für die Produktion",
      "category": "example",
      "url": "/de/adrs/example-adr/decisions/use-nano-assembly-for-production",
      "content": ""
    },
    {
      "title": "Company",
      "category": "",
      "url": "/de/companies/company",
      "content": "Company This is the Company page"
    },
    {
      "title": "Unternehmen",
      "category": "",
      "url": "/de/companies",
      "content": "Companies"
    },
    {
      "title": "SpaceX",
      "category": "",
      "url": "/de/companies/spacex",
      "content": "SpaceX This is the SpaceX page"
    },
    {
      "title": "Tesla",
      "category": "",
      "url": "/de/companies/tesla",
      "content": "Tesla This is the Tesla page"
    },
    {
      "title": "xAI",
      "category": "",
      "url": "/de/companies/xai",
      "content": "xAI This is the xAI page"
    },
    {
      "title": "Glossar",
      "category": "",
      "url": "/de/glossary",
      "content": ""
    },
    {
      "title": "Comprehensive Math Formula Showcase & Test Library",
      "category": "",
      "url": "/de/math-mdx-page/index",
      "content": "Comprehensive Math Formula Showcase Test Library This document provides a triple rendering configuration test sheet to verify naked formulas in mode naked formulas in moonlight color mode and custom card components 1 Core Integration Demonstration Basic Definite Integral Default Style Moonlight II Style MathBlock Card Style Shiki Code Block Alternative math int ^ ^2 dx 2 Physics Quantum Mechanics Examples Standard Einstein Mass Energy Equivalence Default Style Moonlight II Style MathBlock Card Style Time Dependent Schrödinger Formulation Default Style Moonlight II Style MathBlock Card Style 3 Advanced Custom Macro Styling Color Maps Inline Token Highlighting Default Style Moonlight II Style MathBlock Card Style Complex Vector Boundaries Default Style Moonlight II Style MathBlock Card Style Palette Variable Layout Definition Default Style Moonlight II Style MathBlock Card Style Chemical Formula Processing Default Style Moonlight II Style MathBlock Card Style 4 Standard Mathematical Structures Quadratic Equation Formula Default Style Moonlight II Style MathBlock Card Style Infinite Basel Problem Series Default Style Moonlight II Style MathBlock Card Style Multi Variable Double Integrals Default Style Moonlight II Style MathBlock Card Style 5 High Complexity Core System Matrices Linear Systems Vectors Transformation Matrix Default Style Moonlight II Style MathBlock Card Style 3x3 Matrix Determinants Evaluation Default Style Moonlight II Style MathBlock Card Style Multi Conditional Piecewise Functions Default Style Moonlight II Style MathBlock Card Style Multi step Derivation Proof Alignments Default Style Moonlight II Style MathBlock Card Style 6 Advanced Physics Field Equations Full Wave Quantum Hamiltonians Default Style Moonlight II Style MathBlock Card Style Boltzmann Statistical Configuration Entropy Default Style Moonlight II Style MathBlock Card Style Classical Limit Derivative Foundations Default Style Moonlight II Style MathBlock Card Style Classical Electrodynamics Maxwell' Partial Differential Fields Default Style Moonlight II Style MathBlock Card Style"
    },
    {
      "title": "Math Mdx Page",
      "category": "",
      "url": "/de/math-mdx-page",
      "content": "MathBlock"
    },
    {
      "title": "Welcome to my Markdown page!",
      "category": "",
      "url": "/de/md-page/index",
      "content": "Welcome to my Markdown page! This is some bold and italics text This is a list in markdown One Two Three This is a link https //rd center vercel app"
    },
    {
      "title": "Physics Report",
      "category": "",
      "url": "/de/mdx-page/index",
      "content": "Editor Grade Highlighting Enjoy the accuracy and granularity of VS Code' syntax highlighting engine and the popularity of its themes ecosystem — use any VS Code theme you want! Line Numbers and Line Highlighting Draw attention to a particular line of code jsx showLineNumbers MyComponent Word Highlighting Draw attention to a particular word or series of characters jsx /floatingStyles/ MyComponent Inline Code Highlighting The result of 1 2 3 join ' ' is '1 2 3' Context Aware Inline Code For instance if you had the following code block js showLineNumbers getStringLength str When we refer to getStringLength as a plain variable we can color it as a Same with or str vs str etc This allows you to semantically tie inline code with the nearest code block it' referring to Table of Contents Installation installation Usage usage Styles styles Options options grid grid theme theme keepBackground keepbackground bypassInlineCode bypassInlineCode defaultLang defaultlang transformers transformers Meta Strings meta strings Highlight Lines highlight lines Group Highlighted Lines By Id group highlighted lines by id Highlight Chars highlight chars Group Highlighted Chars By Id group highlighted chars by id Highlight Inline Code highlight inline code Highlight Plain Text highlight plain text Titles titles Captions captions Line Numbers line numbers Multiple Themes Dark and Light Mode multiple themes dark and light mode Visitor Hooks visitor hooks Custom Highlighter custom highlighter Server Component react server component Installation Install via your terminal shell npm install rehype pretty code shiki This package is ESM only and currently supports shiki ^1 0 0 To use the latest version in Next js ensure your config file is ESM next config mjs Here' a full example rehype pretty code/website/next config mjs https //github com/atomiks/rehype pretty code/blob/master/website/next config mjs Usage The following works both on the server and on the client js /rehypePrettyCode/ main main Note that unified v11 is used as a dependency internally Ensure your unified version is compatible MDX The following example shows how to use this package with Next js js title \"next config mjs\" @ @ withMDX nextConfig Disable the mdxRs option if Rehype plugins do not work Styles This library is unstyled This means it does not provide a CSS file that applies styling by Rather it provides logical attributes that you use to apply the styling yourself For instance the following CSS prevents overflow and adds padding css pre pre data line Features including highlighted lines chars and line numbers expose data attributes that enable you to add your own styling which are explained below Options ts tokensMap? Record transformers? ShikiTransformer filterMetaString? str string string getHighlighter? options BundledHighlighterOptions onVisitLine? element LineElement void onVisitHighlightedLine? element LineElement void onVisitHighlightedChars? element CharsElement id string undefined void onVisitTitle? element Element void onVisitCaption? element Element void grid A grid style is present by which allows line highlighting to span the entire width of a horizontally scrollable code block You can disable this setting if necessary js theme The theme is github dark dimmed Shiki has a bunch of pre packaged themes https //shiki style/themes themes which can be specified as a plain string js You can use your own theme as well by passing the theme JSON js keepBackground To apply a custom background instead of inheriting the background from the theme js defaultLang When no code language is specified inline code or code blocks will not be themed nor will the background which may appear incongruous with others In this case you can specify a language js Or you can also specify languages for inline code and code blocks separately js transformers Transformers https //shiki style/guide/transformers transformers are a Shiki native way to manipulate the hAST tree of the code blocks and further extend the behavior of this plugin The @shikijs/transformers https //npm im/@shikijs/transformers package provides some useful transformers js Meta Strings Code blocks are configured via the meta string on the top codeblock fence If your library also parses code blocks' meta strings it may cause conflicts https //github com/atomiks/rehype pretty code/issues/52 with rehype pretty code This option allows you to filter out some part of the meta string before the library starts parsing it js Highlight Lines Place a numeric range inside md js Styling The line receives a data highlighted line attribute that enables you to style via CSS Group Highlighted Lines By Id Place an id after after the This allows you to color or style lines differently based on their id md js a Styling The line receives a data highlighted line id \" \" attribute that enables you to style via CSS Highlight Chars You can use either md js /carrot/ Or \" as a delimiter md js \"carrot\" Different segments of chars can also be highlighted md js /carrot/ /apple/ Styling The chars receives a data highlighted chars attribute to style via CSS To highlight only the third to fifth instances of carrot a numeric range can be placed after the last md js /carrot/3 5 Highlight only the third to fifth instances of carrot and any instances of apple md js /carrot/3 5 /apple/ Group Highlighted Chars By Id Place an id after after the chars This allows you to color chars differently based on their id md js /age/ /name/ /setAge/ /setName/ /50/ i /\"Taylor\"/ i js /age/ /name/ /setAge/ /setName/ /50/ i /\"Taylor\"/ i Styling The chars receives a data chars id \" \" attribute to style via CSS Highlight Inline Code Append to the end of inline code to highlight it like a regular code block md This is an array 1 2 3 of numbers 1 through 3 Highlight Plain Text Append to the end of the inline code to highlight it based on a token specified in your VS Code theme Tokens start with a to differentiate them from a language md The name of the is getStringLength You can create a of tokens to shorten this usage throughout your docs js md The name of the is getStringLength Titles Add a file title to your code block with text inside double quotes \"\" md js title \" \" Captions Add a caption underneath your code block with text inside double quotes \"\" md js caption \" \" Line Numbers CSS counters can be used to add line numbers css code code data line before code data line numbers max digits \"2\" data line before code data line numbers max digits \"3\" data line before If you want to conditionally show them use showLineNumbers md js showLineNumbers Styling will have attributes data line numbers and data line numbers max digits \" \" If you want to start line numbers at a specific number use showLineNumbers md js showLineNumbers Multiple Themes Dark and Light Mode Pass your themes to theme where the keys represent the color mode js Now use the following CSS to display the variable colors — if a space is found in the theme name then CSS variable keys based on the object are available more info https //shiki style/guide/dual themes light dark dual themes scss code data theme \" \" code data theme \" \" span @media prefers color scheme dark The and elements will have the data attribute data theme \" themes\" listing each theme value space separated html Visitor Hooks To customize the HTML output you can use visitor callback hooks to manipulate the hAST elements https //github com/syntax tree/hast element directly js onVisitHighlightedLine element onVisitHighlightedChars element onVisitTitle element onVisitCaption element Custom Highlighter To completely configure the highlighter use the getHighlighter option This is helpful if you' like to configure other Shiki options such as langs js Server Component The usage usage works directly in Server Components Here' an example tsx title \"code tsx\" Code highlightCode code string Then Page"
    },
    {
      "title": "Produkte",
      "category": "Produkte",
      "url": "/de/products",
      "content": ""
    },
    {
      "title": "Dienstleistungen",
      "category": "Dienstleistungen",
      "url": "/de/services",
      "content": ""
    }
  ]
};
