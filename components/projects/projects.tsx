import classNames from 'classnames';
import Image from 'next/image';
import LinkCtr from '@/components/link-ctr';
import Comment from '../comment';
import projects from '@/data/projects';
import styles from './projects.module.scss';

type Props = {
    displayImages?: boolean;
};

type ImageProps = {
    src: string;
    width?: number;
    height?: number;
};

export default function Projects({ displayImages }: Props) {
    return (
        <div className={styles['projects']}>
            <Comment text={'Projects'} />
            {projects.map(({ name, link, description, image }, index) => {
                const { src, width, height }: ImageProps = image;

                return (
                    <div
                        key={index}
                        className={classNames(styles['project-ctr'], {
                            [styles['display-images']]: displayImages,
                        })}
                    >
                        <LinkCtr text={name} href={link} />
                        {displayImages && src && (
                            <div className={styles['img-ctr']}>
                                <a href={link} target="_blank">
                                    <Image
                                        src={src}
                                        alt={description}
                                        width={width}
                                        height={height}
                                    />
                                </a>
                            </div>
                        )}
                        <div className={styles.description}>{description}</div>
                    </div>
                );
            })}
        </div>
    );
}
