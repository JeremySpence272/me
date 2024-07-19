import { PageType } from "./App";

interface BodyInnerProps {
  currentPage: PageType;
}

const BodyInner: React.FC<BodyInnerProps> = ({ currentPage }) => {
  switch (currentPage) {
    case PageType.education:
      return (
        <>
          <div className="flex justify-between">
            <p className="font-semibold my-2">Columbia University Fellow</p>
            <p className="font-semibold my-2">Sept 2024</p>
          </div>

          <p>
            Starting in the fall I will be a part of a scholars program at
            Columbia University.
          </p>
          <ul className="list-disc list-outside mt-2 ml-4">
            <li>
              I will be furthering my education through part-time computer
              science classes at night at the undergraduate school.
            </li>
          </ul>
          <div className="flex mt-4 justify-between">
            <p className="font-semibold my-2">Justice Through Code</p>
            <p className="font-semibold my-2">Feb 2024 - Sept 2024</p>
          </div>
          <p>
            JTC is a rigorous 8 month long software engineering intensive out of
            Columbia Business School.
          </p>
          <ul className="list-disc list-outside mt-2 ml-4">
            <li>
              Completed weekly coding assignments and mini-projects covering an
              assortment of topics from frontend libraries, algorithms and data
              structures, containers, networking, & cloud architecture.
            </li>
            <li>
              Engaged in regular group work and designed to build soft skills
              and give experience working in team environments.
            </li>
          </ul>
          <div className="flex mt-4 justify-between">
            <p className="font-semibold my-2">New York University</p>
            <p className="font-semibold my-2">2014 - 2017</p>
          </div>
          <p>
            Completed 3 years of undergraduate classes at New York University
            with an intended major of Philosophy.
          </p>
          <ul className="list-disc list-outside mt-2 ml-4">
            <li>
              Was also a fellow at an exclusive entrepreneurship lab that put on
              classes from successful startup founders and provided access to
              mentors and resources.
            </li>
          </ul>
        </>
      );

    case PageType.experience:
      return (
        <>
          <div className="flex justify-between">
            <p className="font-semibold my-2">Freelance Web Developer</p>
            <p className="font-semibold my-2">Sept 2023 - Present</p>
          </div>

          <p>
            Built and managed 12 different wordpress websites for various
            clients.
          </p>
          <ul className="list-disc list-outside mt-2 ml-4">
            <li>
              Translated PSD & Figma design files into fully interactive
              promotional websites with PHP, Javascript, HTML, & CSS.
            </li>
            <li>
              Optimized code reusability, user experience, page speed, and ADA
              compliance.
            </li>
          </ul>
          <div className="flex mt-4 justify-between">
            <p className="font-semibold my-2">Crypto Asset Manager</p>
            <p className="font-semibold my-2">2018 – 2020</p>
          </div>
          <p>
            Launched a fund that traded blockchain assets primarily bitcoin for
            a number of high net worth individuals.
          </p>
          <ul className="list-disc list-outside mt-2 ml-4">
            <li>
              Experienced explosive growth at it's peak managing over 1000BTC.
            </li>
            <li>
              Was solely responsible for the eventual implosion of the fund
              because of my managerial missteps.
            </li>
          </ul>

          <div className="flex mt-4 justify-between">
            <p className="font-semibold my-2">
              Lead Digital Marketer @ App Partner
            </p>
            <p className="font-semibold my-2">2015 - 2017</p>
          </div>
          <p>
            Was the first marketing team member at an app development agency.
          </p>
          <ul className="list-disc list-outside mt-2 ml-4">
            <li>
              Worked directly with the CEO to increase web presence and generate
              warm leads through an inbound marketing funnel.
            </li>
            <li>
              Increased web presence up 400%+ and helped grow the marketing team
              to 4 other members.
            </li>
          </ul>
        </>
      );
    case PageType.projects:
      return (
        <>
          <div className="flex justify-between">
            <p className="font-semibold my-2">
              <a
                className="underline"
                href="https://github.com/Alforoan/studyflow"
              >
                StudyFlow
              </a>
            </p>
            <p className="font-semibold my-2">March 2023 - Present</p>
          </div>

          <p>
            Was a part of a team of 4 that built a fullstack web application
            that lets people track their self-study efforts through a kanban
            style dashboard.
            <ul className="list-disc list-outside mt-2 ml-4">
              <li>
                Integrated a Flask API backend with a Postgres database and a
                React / Typescript frontend.
              </li>
              <li>
                Employed a comprehensive suite of frontend and backend testing
                along with strong documentation.
              </li>
            </ul>
          </p>
          <div className="flex mt-4 justify-between">
            <p className="font-semibold my-2">
              <a className="underline" href="https://charts.cointrader.pro/">
                Coinsignals.trade
              </a>
            </p>
            <p className="font-semibold my-2">2019 – 2020</p>
          </div>
          <p>
            Created a web application that allows people the ability to chart
            any cryptocurrency coin listed on coinmarketcap.com.
            <ul className="list-disc list-outside mt-2 ml-4">
              <li>
                Grew the application to become the default charting platform for
                smaller marketcap crypotocurrencies with over 50,000 users at
                it's peak.
              </li>
              <li>
                Sold the user base and API to a competing charting platform
                CoinTrader.
              </li>
            </ul>
          </p>
          <div className="flex mt-4 justify-between">
            <p className="font-semibold my-2">
              <a
                className="underline"
                href="https://www.producthunt.com/products/playbook-2#playbook-2"
              >
                Playbook App
              </a>
            </p>
            <p className="font-semibold my-2">2015 - 2017</p>
          </div>
          <p>
            Built, launched, and marketed an iOS app designed to help startup
            founders easily find and follow writers in the startup and tech
            niche.
            <ul className="list-disc list-outside mt-2 ml-4">
              <li>
                Built a full iOS app in Swift that integrated with firebase
                realtime database and rss feeds.
              </li>
              <li>
                Learned ux design practices, digital marketing, version control,
                bug fixing, and more in a hands-on project that got a few
                hundred DAUs and was the #2 Product Hunt project of the day on
                launch.
              </li>
            </ul>
          </p>
        </>
      );
    default:
      return (
        <>
          <p className="mb-4">
            My name is Jeremy, I've had a diverse entrepreneurial career where
            I've enjoyed starting multiple companies from scratch that have seen
            both significant success and failure.
          </p>

          <p className="mb-4">Some highlights:</p>
          <ul className="mb-4 ml-8 list-disc list-outside">
            <li>
              Built, grew, and sold a crypto charting platform that became the
              default charting app for small market cap currencies.
            </li>
            <li>
              Started a cryptocurrency hedge fund that saw rapid growth to over
              1000BTC, before imploding due to my management mistakes.
            </li>
            <li>
              Developed a mobile app that launched as the #2 product hunt
              product of the day while in college.
            </li>
          </ul>
          <p className="mb-4">
            Presently, I am expanding my skill set at a software intensive
            through Columbia Business School where I've become experienced in
            Typescript, React, Python, & cloud architecture (
            <a className="underline" href="https://github.com/JeremySpence272">
              github link
            </a>
            ). I'll also be continuing my education through undergraduate CS
            classes at night at Columbia University starting in the fall of
            2024.
          </p>
        </>
      );
  }
};

export default BodyInner;
