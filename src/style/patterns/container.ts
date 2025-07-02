import type { InferProps, PatternProperties } from "../../../styled-system/types";

export const containerPattern = {
    transform: (props: InferProps<PatternProperties>) => {
        return {
            position: 'relative',
            width: '100%',
            maxWidth: {base: 'calc(100vw - 25px)', lg:'calc(100vw - 100px)'},
            mx: 'auto',
            ...props   
          }
    }
}