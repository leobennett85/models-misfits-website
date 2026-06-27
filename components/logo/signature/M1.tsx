import { forwardRef } from "react";

const M1 = forwardRef<SVGPathElement>((props, ref) => (
  <path
    ref={ref}
    className="draw-m1"
      d="m 72.644103,105.48936 c 0,0 5.483839,-7.007135 10.155256,-7.616449 4.67142,-0.609317 -10.256808,19.701209 -10.256808,19.701209 0,0 12.897175,-19.498104 19.802749,-22.240024 6.905575,-2.741919 -11.069229,19.498104 -11.069229,19.498104 0,0 18.076356,-19.396552 26.403659,-22.747788 8.32731,-3.351233 -36.759634,47.536848 -21.536228,43.802808"
      fill="none"
    stroke="#4E647C"
    strokeWidth="1.82472"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
));

M1.displayName = "M1";

export default M1;