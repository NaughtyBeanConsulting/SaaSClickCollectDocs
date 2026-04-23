import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const operatingPrinciples = [
  'Direct ownership of your brand, customer relationship, and payment flow.',
  'Operational integrity from order placement through pickup handoff.',
  'Habit-driven design that encourages repeat ordering without marketplace dependency.',
  'Independent-first tooling built for coffee operators running daily service.',
];

const guideAreas = [
  {
    copy:
      'Shape the storefront look, set commercial details, and understand how recurring billing and add-ons work before rollout.',
    href: '/docs/portal/branding',
    linkLabel: 'Start with Branding',
    stat: 'Also covers billing setup and commercial guardrails.',
    tag: 'Launch',
    title: 'Brand, package, and price the experience',
  },
  {
    copy:
      'Stand up branches, assign staff, and map team access so the right people can run the right locations.',
    href: '/docs/portal/locations',
    linkLabel: 'Open Locations and Team guides',
    stat: 'Covers branch creation, assignments, and role-aware operations.',
    tag: 'Operate',
    title: 'Scale locations without losing control',
  },
  {
    copy:
      'Run the menu, queue, status flow, categories, extras, and drink configuration from the same operational surface your team uses live.',
    href: '/docs/portal/shop-manager',
    linkLabel: 'Go to Shop Manager',
    stat: 'Built around the real card view, table view, and order state transitions.',
    tag: 'Execute',
    title: 'Keep pickup reliable during service',
  },
  {
    copy:
      'Publish domains, update company settings, connect payment providers, and lock in VAT and storefront policies with confidence.',
    href: '/docs/portal/settings',
    linkLabel: 'Review Settings and Domains',
    stat: 'Covers customer-facing trust signals and operational configuration.',
    tag: 'Own',
    title: 'Control the full customer journey',
  },
];

function HomepageHeader() {
  const brandMark = useBaseUrl('/img/ClickCollectLogo1024x1024.png');

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroGlow} />
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>South African SaaS for independent coffee brands</p>
          <Heading as="h1" className={styles.heroTitle}>
            Own the repeat order.
          </Heading>
          <p className={styles.heroSubtitle}>
            ClickCollect.coffee gives coffee operators a branded order-ahead experience with reliable pickup flows and direct control over customer relationships, payments, and daily execution.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/portal-guide">
              Open the portal guide
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/portal/shop-manager">
              Go to Shop Manager docs
            </Link>
          </div>
          <p className={styles.heroMeta}>
            Written for founders, operators, and implementation partners working inside the live portal.
          </p>
        </div>
        <div className={styles.heroPanel}>
          <div className={styles.heroPanelCard}>
            <div className={styles.heroPanelTop}>
              <img alt="ClickCollect.coffee logo" className={styles.heroLogo} src={brandMark} />
              <div>
                <p className={styles.panelLabel}>Business DNA</p>
                <p className={styles.panelBody}>
                  Premium utility for coffee operators who want direct ownership and dependable pickup.
                </p>
              </div>
            </div>
            <ul className={styles.panelList}>
              {operatingPrinciples.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </div>
          <div className={styles.heroMetrics}>
            <div className={styles.heroPanelCardMuted}>
              <p className={styles.metricLabel}>Direct ownership</p>
              <p className={styles.metricBody}>
                Your brand, payments, and customer relationship stay under your control.
              </p>
            </div>
            <div className={styles.heroPanelCardMuted}>
              <p className={styles.metricLabel}>Pickup reliability</p>
              <p className={styles.metricBody}>
                The docs track the real order flow so service teams can execute without ambiguity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageSections() {
  return (
    <section className={styles.sections}>
      <div className="container">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Portal coverage</p>
          <Heading as="h2" className={styles.sectionHeading}>
            Documentation mapped to the way operators actually work
          </Heading>
          <p className={styles.sectionLead}>
            Every guide follows the live portal navigation and now supports drop-in screenshots without restructuring the docs.
          </p>
        </div>
        <div className={styles.sectionGrid}>
          {guideAreas.map((guideArea) => (
            <article className={styles.sectionCard} key={guideArea.title}>
              <div className={styles.sectionHeader}>
                <p className={styles.sectionTag}>{guideArea.tag}</p>
                <p className={styles.sectionStat}>{guideArea.stat}</p>
              </div>
              <Heading as="h3" className={styles.sectionTitle}>
                {guideArea.title}
              </Heading>
              <p className={styles.sectionCopy}>{guideArea.copy}</p>
              <Link className={styles.sectionLink} to={guideArea.href}>
                {guideArea.linkLabel}
              </Link>
            </article>
          ))}
        </div>
        <div className={styles.closingBand}>
          <div>
            <p className={styles.sectionEyebrow}>Operational documentation</p>
            <Heading as="h2" className={styles.closingTitle}>
              Built for live service, not generic setup theatre
            </Heading>
            <p className={styles.closingCopy}>
              The docs cover Branding, Billing, Locations, Team, Shop Manager, Domains, and Settings in the order portal users encounter them.
            </p>
          </div>
          <Link className="button button--primary button--lg" to="/docs/portal-guide">
            Read the full portal guide
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="ClickCollect.coffee Docs"
      description="Operational documentation for branded order-ahead coffee storefronts.">
      <HomepageHeader />
      <main>
        <HomepageSections />
      </main>
    </Layout>
  );
}
