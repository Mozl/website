# website

Note to self:

When exporting animations in Blender make sure to:

- Bake each animation (Object -> Animation -> Bake Animation)
- In bake settings, select clear constraints and visual keying (eg. so camera constraint gets converted to location vector)
- Make sure Cameras is checked in export settings

In code:

- Set makeDefault on the PerspectiveCamera to true
