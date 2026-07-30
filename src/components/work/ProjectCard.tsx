import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '@/components/ui/Tag';
import { cn } from '@/lib/cn';

export interface ProjectCardProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
  tags: string[];
  href: string;
  className?: string;
}

export function ProjectCard({
  image,
  title,
  description,
  tags,
  href,
  className,
}: ProjectCardProps) {
  const visibleTags = tags.slice(0, 5);

  return (
    <article className={cn('project-card', className)}>
      <Link href={href} className="project-card__link">
        <div className="project-card__media">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="project-card__image"
          />
        </div>
        <div className="project-card__body">
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__description">{description}</p>
          {visibleTags.length > 0 ? (
            <ul className="project-card__tags">
              {visibleTags.map((tag) => (
                <li key={tag}>
                  <Tag label={tag} />
                </li>
              ))}
            </ul>
          ) : null}
          <span className="project-card__cta">
            View Project
            <span className="project-card__arrow" aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
