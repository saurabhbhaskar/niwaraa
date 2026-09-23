import { LogoTextRing } from '@/components/brand/LogoTextRing';
import { NiwaraaLogo } from '@/components/brand/NiwaraaLogo';

type BrandLogoMarkProps = {
  symbolClassName?: string;
  showRing?: boolean;
  logoVariant?: 'auto' | 'default' | 'white';
  closeMenuOnClick?: boolean;
};

export function BrandLogoMark({
  symbolClassName = 'logo_symbol header',
  showRing = true,
  logoVariant = 'auto',
  closeMenuOnClick = false,
}: BrandLogoMarkProps) {
  return (
    <>
      <div
        aria-label="Niwaraa"
        className={symbolClassName}
        {...(closeMenuOnClick ? { 'data-modal-close': 'menu' } : {})}
      >
        <div className="logo w-embed">
          <NiwaraaLogo variant={logoVariant} />
        </div>
      </div>
      {showRing && (
        <>
          <LogoTextRing size="desk" />
          <LogoTextRing size="mob" />
        </>
      )}
    </>
  );
}
