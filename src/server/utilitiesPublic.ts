import {
    getNormalizedAbsolutePath,
    isRootedDiskPath,
    normalizePath,
    Path,
    SortedArray,
    SortedReadonlyArray,
    TypeAcquisition,
} from "./_namespaces/ts.js";
import {
    DiscoverTypings,
    Project,
} from "./_namespaces/ts.server.js";

export enum LogLevel {
    terse,
    normal,
    requestTime,
    verbose,
}

export const emptyArray: SortedReadonlyArray<never> = createSortedArray<never>();

export interface Logger {
    close(): void;
    hasLevel(level: LogLevel): boolean;
    loggingEnabled(): boolean;
    perftrc(s: string): void;
    info(s: string): void;
    startGroup(): void;
    endGroup(): void;
    msg(s: string, type?: Msg): void;
    getLogFileName(): string | undefined;
    /** @internal*/ isTestLogger?: boolean;
}

// TODO: Use a const enum (https://github.com/Microsoft/TypeScript/issues/16804)
export enum Msg {
    Err = "Err",
    Info = "Info",
    Perf = "Perf",
}

/**
 * Generates a request object to install typings for a project.
 *
 * @param project - The project for which the typings installation request is created.
 * @param typeAcquisition - Configuration for acquiring types related to the project.
 * @param unresolvedImports - A sorted array of unresolved module imports in the project.
 * @param cachePath - Optional path where cached data related to type acquisition can be stored.
 * @returns An object representing a typings discovery request. The object includes the project name, file names, compiler options, type acquisition settings, unresolved imports, project root path, cache path, and the kind of request.
 */
export function createInstallTypingsRequest(project: Project, typeAcquisition: TypeAcquisition, unresolvedImports: SortedReadonlyArray<string>, cachePath?: string): DiscoverTypings {
    return {
        projectName: project.getProjectName(),
        fileNames: project.getFileNames(/*excludeFilesFromExternalLibraries*/ true, /*excludeConfigFiles*/ true).concat(project.getExcludedFiles() as NormalizedPath[]),
        compilerOptions: project.getCompilationSettings(),
        typeAcquisition,
        unresolvedImports,
        projectRootPath: project.getCurrentDirectory() as Path,
        cachePath,
        kind: "discover",
    };
}

export namespace Errors {
    /**
 * Throws an error indicating that no project is available.
 * 
 * This function is used within the `Errors` namespace to signal the absence of a project context
 * when such a context is required for further operations.
 * 
 * @throws Always throws an error with the message "No Project."
 */
export function ThrowNoProject(): never {
        throw new Error("No Project.");
    }
    /** 
 * Throws an error indicating that the project's language service is disabled. 
 * 
 * This function does not take any parameters and is utilized to signal that 
 * operations requiring the language service cannot proceed.
 * 
 * @throws Error indicating the language service is disabled.
 */
export function ThrowProjectLanguageServiceDisabled(): never {
        throw new Error("The project's language service is disabled.");
    }
    /**
 * Throws an error indicating that the specified project does not contain the given document.
 *
 * @param fileName - The name of the document that is not included in the project.
 * @param project - The project instance to check against.
 * @throws Error - Always throws with a message specifying the project name and missing document name.
 */
export function ThrowProjectDoesNotContainDocument(fileName: string, project: Project): never {
        throw new Error(`Project '${project.getProjectName()}' does not contain document '${fileName}'`);
    }
}

export type NormalizedPath = string & { __normalizedPathTag: any; };

/**
 * Converts the given file name into a normalized path.
 *
 * @param fileName - The file name to be converted to a normalized path.
 * @returns The normalized path representation of the file name.
 */
export function toNormalizedPath(fileName: string): NormalizedPath {
    return normalizePath(fileName) as NormalizedPath;
}

/**
 * Converts a normalized path to a canonicalized `Path` using the current directory and a canonical file name function.
 *
 * @param normalizedPath - The normalized path to be converted.
 * @param currentDirectory - The current directory to resolve relative paths against.
 * @param getCanonicalFileName - A function that returns the canonical file name for a given input.
 * @returns The canonicalized path.
 */
export function normalizedPathToPath(normalizedPath: NormalizedPath, currentDirectory: string, getCanonicalFileName: (f: string) => string): Path {
    const f = isRootedDiskPath(normalizedPath) ? normalizedPath : getNormalizedAbsolutePath(normalizedPath, currentDirectory);
    return getCanonicalFileName(f) as Path;
}

/**
 * Converts a file name into a normalized path.
 * 
 * @param fileName - The file name to be converted into a normalized path.
 * @returns A normalized path representation of the input file name.
 */
export function asNormalizedPath(fileName: string): NormalizedPath {
    return fileName as NormalizedPath;
}

export interface NormalizedPathMap<T> {
    get(path: NormalizedPath): T | undefined;
    set(path: NormalizedPath, value: T): void;
    contains(path: NormalizedPath): boolean;
    remove(path: NormalizedPath): void;
}

export function createNormalizedPathMap<T>(): NormalizedPathMap<T> {
    const map = new Map<string, T>();
    return {
        get(path) {
            return map.get(path);
        },
        set(path, value) {
            map.set(path, value);
        },
        contains(path) {
            return map.has(path);
        },
        remove(path) {
            map.delete(path);
        },
    };
}

/** @internal */
export interface ProjectOptions {
    configHasExtendsProperty: boolean;
    /**
     * true if config file explicitly listed files
     */
    configHasFilesProperty: boolean;
    configHasIncludeProperty: boolean;
    configHasExcludeProperty: boolean;
}

/**
 * Checks if the given project name matches the format of an inferred project name.
 * The inferred project names are generated for temporary or unnamed projects
 * and follow the pattern "/dev/null/inferredProject<number>*".
 *
 * @param name - The project name to be checked against the inferred project name pattern.
 * @returns A boolean indicating whether the provided name matches the inferred project name format.
 */
export function isInferredProjectName(name: string): boolean {
    // POSIX defines /dev/null as a device - there should be no file with this prefix
    return /dev\/null\/inferredProject\d+\*/.test(name);
}

/**
 * Generates a unique inferred project name used for project identification.
 *
 * @param counter - A numeric counter used to differentiate project names. Each project name will include this counter value to ensure uniqueness.
 * @returns The generated inferred project name as a string.
 */
export function makeInferredProjectName(counter: number): string {
    return `/dev/null/inferredProject${counter}*`;
}

/** 
 * Generates a unique auto-import provider project name used for project identification.
 *
 * @param counter - A numeric counter used to differentiate project names. Each project name will include this counter value to ensure uniqueness.
 */
export function makeAutoImportProviderProjectName(counter: number): string {
    return `/dev/null/autoImportProviderProject${counter}*`;
}

/** 
 * Generates a unique auxiliary project name used for project identification.
 *
 * @param counter - A numeric counter used to differentiate project names. Each project name will include this counter value to ensure uniqueness.
 * @returns The generated auxiliary project name as a string.
 */
export function makeAuxiliaryProjectName(counter: number): string {
    return `/dev/null/auxiliaryProject${counter}*`;
}

/**
 * Creates and returns a new sorted array instance. The returned array 
 * is initially empty and complies with the `SortedArray` type.
 *
 * @returns A new sorted array instance with no initial elements.
 */
export function createSortedArray<T>(): SortedArray<T> {
    return [] as any as SortedArray<T>; // TODO: GH#19873
}
