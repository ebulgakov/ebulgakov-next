import { CirclePlay } from "lucide-react";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";
import { Title } from "@/app/components/ui/title";

function HomeJobPosition() {
  return (
    <section>
      <Title variant="h1">Recent Experience</Title>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1 space-y-3">
          <Title variant="h3" className="mt-0 mb-6">
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
          <Title variant="h3" className="mt-0 mb-6">
            My responsibility:
          </Title>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Developed a Print-on-Demand PoC in just two weeks, which evolved into a primary
              revenue stream.
            </li>
            <li>
              Revamped frontend architecture, improving critical metrics by 2x in PageSpeed
              Insights.
            </li>
            <li>Maintained a large-scale e-commerce site with 100k+ users per day.</li>
          </ul>

          <div className="mt-4 flex justify-end gap-6">
            <a
              className="text-primary flex gap-1"
              href="https://static.ebulgakov.com/resume/CV_Evgenii_Bulgakov_Senior_Frontend.pdf"
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
