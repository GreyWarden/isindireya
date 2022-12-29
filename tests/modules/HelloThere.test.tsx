import { render } from "@testing-library/react";
import { HelloThere } from "@modules/HelloThere";

describe('modules/HelloThere.tsx',  () => {
    it('should match snapshot',  () => {
        const {container} = render(<HelloThere />)

        expect(container).toMatchSnapshot()
    });
});