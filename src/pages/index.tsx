import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx('container', styles.heroGrid)}>
        <div>
          <p className={styles.eyebrow}>ClickCollect Portal Documentation</p>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
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
            Covers Branding, Billing, Locations, Team, Shop Manager, Domains, and Settings.
          </p>
        </div>
        <div className={styles.heroPanel}>
          <div className={styles.heroPanelCard}>
            <p className={styles.panelLabel}>Portal nav order</p>
            <ol className={styles.panelList}>
              <li>Branding</li>
              <li>Billing</li>
              <li>Locations</li>
              <li>Team</li>
              <li>Shop Manager</li>
              <li>Domains</li>
              <li>Settings</li>
            </ol>
          </div>
          <div className={styles.heroPanelCardMuted}>
            <p className={styles.panelLabel}>Screenshot status</p>
            <p className={styles.panelBody}>
              The guides include screenshot slots at each step so authenticated portal captures can be dropped in without restructuring the docs.
            </p>
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
        <div className={styles.sectionGrid}>
          <article className={styles.sectionCard}>
            <p className={styles.sectionTag}>Brand</p>
            <Heading as="h2" className={styles.sectionTitle}>
              Shape the storefront experience
            </Heading>
            <p className={styles.sectionCopy}>
              Theme presets, hero copy, typography, color systems, and uploaded assets are documented in the same sequence as the live Branding editor.
            </p>
            <Link to="/docs/portal/branding">Read the Branding guide</Link>
          </article>
          <article className={styles.sectionCard}>
            <p className={styles.sectionTag}>Operate</p>
            <Heading as="h2" className={styles.sectionTitle}>
              Run billing, branches, and staff
            </Heading>
            <p className={styles.sectionCopy}>
              Recurring totals, add-on logic, location billing, role-based access, and branch assignment flows are documented for owners and admins.
            </p>
            <Link to="/docs/portal/billing">Read Billing and operations guides</Link>
          </article>
          <article className={styles.sectionCardAccent}>
            <p className={styles.sectionTag}>Manage</p>
            <Heading as="h2" className={styles.sectionTitle}>
              Keep the order queue moving
            </Heading>
            <p className={styles.sectionCopy}>
              The Shop Manager docs cover table vs card view, order state changes, categories, extras, drinks, and the extras-to-drinks workflow.
            </p>
            <Link to="/docs/portal/shop-manager">Read the Shop Manager guide</Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Operational documentation for the ClickCollect portal.">
      <HomepageHeader />
      <main>
        <HomepageSections />
        <Link className={styles.primaryCtaInline} to="/docs/portal/settings">
          Jump to Settings documentation
        </Link>
      </main>
    </Layout>
  );
}
