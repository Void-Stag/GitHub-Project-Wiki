import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Full breakdown of my projects',
    Svg: require('@site/static/img/undraw_creative-flow_t3kz.svg').default,
    description: (
      <>
        Understand the process of each function and request of every project.
        Resources linked to provide clarity of tool usage.
      </>
    ),
  },
  {
    title: 'Constant uploads and editing',
    Svg: require('@site/static/img/undraw_data-input_whqw.svg').default,
    description: (
      <>
        Content uploaded and updated at a steady pace. Find an issue or error?
        Drop me an email, specifying issue and page and I'll fix it.
      </>
    ),
  },
  {
    title: 'Clean and easy interface',
    Svg: require('@site/static/img/undraw_vibe-coding_mjme.svg').default,
    description: (
      <>
        Utilising Docusaurus to create a structured and clean Wiki.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
