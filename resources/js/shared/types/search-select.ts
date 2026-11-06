export type Option = {
    value: string;
    label: string;
    [key: string]: unknown;
};

export type SearchSelectFieldProps<T> = {
    label: string;
    isRequired?: boolean;
    value: Option | null;
    onChange: (option: Option | null) => void;
    endpoint: string;

    getOptionValue: (item: T) => string;
    getOptionLabel: (item: T) => string;
    getOptionExtra?: (item: T) => Record<string, unknown>;

    leftAddon?: string | ReactNode;
    placeholder?: string;
    isInvalid?: boolean;
    background?: string;
    isReadOnly?: boolean;
};
