import { CirclePlay } from "lucide-react";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";
import { Title } from "@/app/components/ui/title";

function HomeJobPosition() {
  return (
    <section>
      <Title variant="h1">My last job position</Title>

      <div className="flex gap-8">
        <div className="flex-1 space-y-3">
          <Title variant="h3" className="mt-0">
            Senior Frontend Developer
          </Title>

          <a
            className="flex flex-col gap-3"
            href="https://www.jiffyshirts.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="JiffyShirts"
          >
            <CloudinaryImage
              width="150"
              height="150"
              src="bulgakov/jiffyshirts"
              alt="Jiffyshirts.com Logo"
            />

            <em>
              JiffyShirts.com &mdash; is a large e-commerce site for custom printed apparel and
              accessories.
            </em>
          </a>

          <dl>
            <dt className="font-medium">Employed: </dt>
            <dd>November 2019 &mdash; December 2025</dd>
          </dl>
          <dl className="current-job_info">
            <dt className="font-medium">Location: </dt>
            <dd>Remote</dd>
          </dl>
        </div>
        <div className="flex-2">
          <Title variant="h3" className="mt-0">
            My responsibility:
          </Title>
          <ul className="list-disc pl-5">
            <li>Develop and maintain a large-scale e-commerce site with 100k+ users per day</li>
            <li>
              Implement, take care of the website cache, and clean up large A/B-tests on the site.
            </li>
            <li>I’am a top performer from the dev team for implementation and quality</li>
            <li>Build new product features using React, Vue, and ES6</li>
            <li>
              Convert static design from Figma, Sketch and text description to performance
              UI-components with good quality in PageSpeed and maintainability.
            </li>
            <li>
              Maintain Code Review from 70+ developers every day, and often 1:1 to help them improve
              their code
            </li>
            <li>
              Define and enforce frontend code quality standards (ESLint, Jest, best practices)
            </li>
            <li>
              I almost fully replaced the FE on the site - replaced infrastructure with modern
              Webpack, reshaked deps, implemented performance tricks, and I’ve improved the critical
              metrics twice in PageSpeed Insights.
            </li>
            <li>
              Collaborate closely with backend engineers, designers, and product managers for a
              better user experience on the site
            </li>
            <li>
              I created a PoC-application in two weeks, which is now one of the main focuses for the
              company.
            </li>
          </ul>

          <div className="mt-4 flex justify-end gap-4">
            <a
              className="text-primary flex gap-1"
              href="https://static.ebulgakov.com/resume/CV-Eugene-Bulgakov.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="JiffyShirts"
            >
              <CirclePlay />
              <span className="underline hover:no-underline">Read my CV</span>
            </a>
            <a
              className="text-primary flex gap-1"
              href="https://static.ebulgakov.com/resume/Application-Letter-Eugene-Bulgakov-EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="JiffyShirts"
            >
              <CirclePlay />
              <span className="underline hover:no-underline">Read my Application Letter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HomeJobPosition };
