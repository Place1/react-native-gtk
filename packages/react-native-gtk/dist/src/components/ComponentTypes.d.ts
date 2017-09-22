import GtkComponent from './GtkComponent';
export interface ComponentRegistry {
    [key: string]: new (props: any, root: any) => GtkComponent;
}
export declare const Button = "Button";
export declare const Box = "Box";
export declare const View = "View";
export declare const ComponentTypes: ComponentRegistry;
