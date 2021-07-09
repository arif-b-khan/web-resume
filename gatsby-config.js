const activeEnv =
process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`,
});
console.log(process.env);

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://arif-b-khan.github.io/resume`,
    githubSiteName: `resume`,
    name: `Arif Khan`,
    role: `Software Developer`,
    email: `arif.bannehasan@gmail.com`,
    socialMedia: [
      {
        name: "github",
        link: "https://github.com/arif-b-khan",
      },
      { name: "linkedin", link: "https://www.linkedin.com/in/arif-khan-01a5671b" },
      { name: "twitter", link: "https://twitter.com/Arif77591270" },
      { name: "instagram", link: "https://www.instagram.com/arif_b_khan" },
    ],
    about: `
      <p>I'm Arif Khan currently living in Mumbai, India.
      Before I tell about myself I would like to share a little story about my journey of becoming "Software Engineer".
      I've been passionate about computer's and technologies.
      During early 2000 I gained knowledge about internet and computer. 
      I was excited to see floppy drive how you can save documents and data in floppy. 
      In those days having computer at home was expensive affair for my family. 
      I used to visit cyber cafes to get access to internet and computer.
      During this time I had the realization of spark in me to become "Software Engineer".  
      <p/>
      <p>
      Now, I'm working for "JP Morgan". My job title in "JP Morgan" is "Associate Vice President (Software Engineer)". 
      My responsibility in this organization is to build, architect and maintain enterprise level application.
      Having more than 11 years of experience in Software Engineer, reponsiblity lies on my shoulders to guide and train team members.
      One of my major projects in "JP Morgan" is "Electronic Filing". I'd built "Electronic Filing" application (design, UI and coding)
      which helped operation's team to automatically file for reclaim with "Dutch Tax" authorities.
      </p>        
      <p>
      I'm also into full stack development. I've great interest in front end technologies. 
      I've good knowledge of front end technologies like Angular and React. 
      My acheivement in full stack development was to single handedly migrated AngularJs application to Angular 2.0.
      My primary language is C# and Javascript.
      By soul I'm programmer I like learning new languages. I'm capable enough to write applications in languages like 
      C#, Javascript, Java and Python. I've tried my hands on languages like go and kotlin. 
      </p>
      `,
    education: [
      {
        degree: "GNIIT",
        major: "Software Engineering",
        when: "2007-2010",
        school: "GNIIT",
        where: "Mumbai, India",
        moreInfo: `"Complete Software Engineering from NIIT"`,
      },
      {
        degree: "Graduation",
        major: "Commerce",
        when: "2005-2009",
        school: "Mumbai University",
        where: "Mumbai, India",
        moreInfo: `<p>Complete my graduation from Mumbai university.</p>`,
      },
      {
        degree: "High School",
        major: "Commerce",
        when: "2002-2005",
        school: "Kamala Mehta College",
        where: "Mumbai, India",
        moreInfo: `<p>Complete my High school from Kamala Metha College</p>`,
      },
      {
        degree: "Schooling",
        when: "1991-2002",
        school: "SRWS High School",
        where: "Mumbai, India",
      },
    ],
    experience: [
      {
        role: "Senior Software Engineer (Associate Vice President)",
        when: "2016-Present",
        company: "JP Morgan",
        where: "Mumbai, India",
        logo: "jpmorgan",
        moreInfo: `Currently working in JP Morgan as Senior Software Engineer (Associate Vice President).
        My working on TACT (Tax ) team. 
        My responsibility in this organization is to build, architect and maintain enterprise level application.
      Having more than 11 years of experience in Software Engineer, reponsiblity lies on my shoulders to guide and train team members.
      One of my major projects in "JP Morgan" is "Electronic Filing". I'd built "Electronic Filing" application (design, UI and coding)
      which helped operation's team to automatically file for reclaim with "Dutch Tax" authorities.
        `
      },
      {
        role: "Senior Software Engineer",
        when: "2015-2016",
        company: "BNP Paribas",
        where: "Mumbai, India",
        logo: "bnpparibas",
        moreInfo: `Worked here as consolutant on the payroll of company called "MITS". 
        I worked for BNP Paribas for about 1.5 years. I worked for REVAL team, 
        REVAL is post trading platform. It used to give post trade related information through report. 
        Using REVAL portal end user used to configure a report. 
        This team's job was to enhance and maintain REVAL portal.  
        In this team I'd worked on technologies like Silverlight, .net, WCF, Sql and SSRS.
        `
      },
      {
        role: "Senior Software Engineer",
        when: "2013-2015",
        company: "Bank of America",
        where: "Mumbai, India",
        logo: "bankofamerica",
        moreInfo: `In Bank of America I worked in GWIM. I was part of team which used to manage "Wealth Management" application.
        This application was built on ASP.net (Web forms). My job was to make enhancement in "Wealth Management" application.  
        I also had opportunity to work on Angularjs. In Wealth Management portal angularjs was used as a submodule to load UI components. 
        `
      },
      {
        role: "Associate Software Engineer",
        when: "2010-2013",
        company: "Wipro",
        where: "Mumbai, India",
        logo: "wipro",
        moreInfo: `In the year 2010 I got the opportunity to work "Syncada". I joined "Syncada" as junior software engineer. 
        I used to handle audit engines which used to process invoices. In few months time I was given opportunity to build data entry application
        for our operation team to enter the invoice details manually. I helped built 2 windows applications. 
        I also had opportunity to work with Cognos team. In this team I was helping Cognos developers with javascript code in reports. 
        My main project in "Syncada" was TranManager. In this team I'd opportunity to learn UI and WCF. 
        I extensively worked on WCF and UI application.  
        In the year 2012-13 Syncada India process was taken over by Wipro. I was converted from "Syncada" employee to "Wipro" employee.
        `
      }
    ],
    skills: [
      {
        name: "C#",
        level: "90",
        experience: "10 years",
      },
      {
        name: "JavaScript",
        level: "90",
        experience: "10 years",
      },
      {
        name: "Angular",
        level: "85",
        experience: "5 years",
      },
      {
        name: "React",
        level: "75",
        experience: "4 years",
      },
      {
        name: "Sql",
        level: "75",
        experience: "10 years",
      },
      {
        name: ".Net",
        level: "75",
        experience: "10 years",
      },
      {
        name: "AWS",
        level: "75",
        experience: "2 years",
      },
      {
        name: "NodeJs",
        level: "65",
        experience: "2 years",
      },
      {
        name: "Python",
        level: "65",
        experience: "1 years",
      },
      {
        name: "Java",
        level: "70",
        experience: "3 years",
      }
    ],
    interests: [
      "Reading",
      "Programming",
      "Swimming",
      "Cricket"
    ],
    certifications: [
      {
        name: "AWS Solutions Architect",
        badge: "aws_sol",
        link: "https://www.credly.com/badges/716b5188-83f6-4fd0-9147-b3ebd93ad512/public_url"
      }
    ],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "darth-vader",
    //fonts. Available: [default, programmer]
    font: "default",
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-4NRSMV78G5",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
		`gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `IBM Plex Mono`,
        ],
				display: 'swap'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/static/clientartifacts`,
      },
    }
  ],
}
