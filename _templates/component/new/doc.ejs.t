---
to: src/components/<%=name%>/<%=name%>.mdx
---
import { Canvas, Controls, Meta } from "@storybook/blocks";
import * as Stories from "./<%=name%>.stories";

<Meta of={Stories} />

# <%=name%>

<%=name%> base component.

<Canvas of={Stories.Default} withToolbar />

<Controls of={Stories.Default} />

## Predefined properties

## Custom properties
