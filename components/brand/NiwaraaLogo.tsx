/* eslint-disable @next/next/no-img-element */

export const NIWAARAA_LOGO_SRC = '/images/niwaraa_logo_transparent.png';
export const NIWAARAA_LOGO_WHITE_SRC = '/images/white_logo.png';

type NiwaraaLogoProps = {
  className?: string;
  alt?: string;
  variant?: 'auto' | 'default' | 'white';
};

export function NiwaraaLogo({ className = '', alt = 'Niwaraa', variant = 'auto' }: NiwaraaLogoProps) {
  const sharedClass = `niwaraa-logo ${className}`.trim();

  if (variant === 'default') {
    return (
      <img
        src={NIWAARAA_LOGO_SRC}
        alt={alt}
        loading="eager"
        className={`${sharedClass} niwaraa-logo--default`}
      />
    );
  }

  if (variant === 'white') {
    return (
      <img
        src={NIWAARAA_LOGO_WHITE_SRC}
        alt={alt}
        loading="eager"
        className={`${sharedClass} niwaraa-logo--white`}
      />
    );
  }

  return (
    <>
      <img
        src={NIWAARAA_LOGO_SRC}
        alt={alt}
        loading="eager"
        className={`${sharedClass} niwaraa-logo--default`}
      />
      <img
        src={NIWAARAA_LOGO_WHITE_SRC}
        alt=""
        loading="eager"
        aria-hidden="true"
        className={`${sharedClass} niwaraa-logo--white`}
      />
    </>
  );
}
