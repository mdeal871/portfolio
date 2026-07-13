interface CompanyLogoProps {
  company: "ti" | "ncsu" | "superior-concrete";
  className?: string;
}

/**
 * Small brand-accurate marks for past employers, used next to Experience
 * entries and (NC State) the Education section. These are built as clean
 * text/wordmark treatments in each brand's real colors rather than traced
 * reproductions of the actual logo artwork — lower-risk for a public repo,
 * and it keeps everything on-brand with the rest of the site's vector,
 * mono-label visual language instead of importing raster logo files.
 */
export function CompanyLogo({ company, className = "" }: CompanyLogoProps) {
  if (company === "ti") {
    return (
      <span
        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#CC0000] font-display text-sm font-bold lowercase text-white ${className}`}
        title="Texas Instruments"
      >
        ti
      </span>
    );
  }

  if (company === "ncsu") {
    return (
      <span
        className={`inline-flex h-9 items-center rounded-md border border-border bg-surface-2 px-2.5 font-display text-xs font-bold tracking-wide text-[#CC0000] ${className}`}
        title="NC State University"
      >
        NC STATE
      </span>
    );
  }

  // Superior Concrete of NC — recreated in the same red/black block-letter
  // treatment as their real wordmark (S / C / I in solid red squares).
  return (
    <span
      className={`inline-flex h-9 items-center gap-[1px] rounded-md border border-border bg-surface-2 px-2 font-serif text-xs italic text-text ${className}`}
      title="Superior Concrete of NC Inc."
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#C1272D] font-sans not-italic font-bold text-white">
        S
      </span>
      <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#C1272D] font-sans not-italic font-bold text-white">
        C
      </span>
      <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#C1272D] font-sans not-italic font-bold text-white">
        I
      </span>
    </span>
  );
}
