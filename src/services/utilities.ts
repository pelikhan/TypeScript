import {
    __String,
    addEmitFlags,
    addSyntheticLeadingComment,
    addSyntheticTrailingComment,
    AnyImportOrRequireStatement,
    assertType,
    AssignmentDeclarationKind,
    BinaryExpression,
    binarySearchKey,
    BindingElement,
    BlockLike,
    BreakOrContinueStatement,
    CallExpression,
    canHaveModifiers,
    CaseClause,
    cast,
    CatchClause,
    CharacterCodes,
    ClassDeclaration,
    ClassExpression,
    clone,
    combinePaths,
    CommentKind,
    CommentRange,
    compareTextSpans,
    compareValues,
    Comparison,
    CompilerOptions,
    ConditionalExpression,
    contains,
    ContextFlags,
    createRange,
    createScanner,
    createTextSpan,
    createTextSpanFromBounds,
    Debug,
    Declaration,
    Decorator,
    DefaultClause,
    defaultMaximumTruncationLength,
    DeleteExpression,
    Diagnostic,
    DiagnosticAndArguments,
    DiagnosticArguments,
    DiagnosticMessage,
    DiagnosticWithLocation,
    directoryProbablyExists,
    DisplayPartsSymbolWriter,
    DocumentPosition,
    DocumentSpan,
    DoStatement,
    ElementAccessExpression,
    EmitFlags,
    emitModuleKindIsNonNodeESM,
    emptyArray,
    EndOfFileToken,
    endsWith,
    ensureScriptKind,
    EqualityComparer,
    EqualityOperator,
    equateStringsCaseInsensitive,
    equateStringsCaseSensitive,
    escapeString,
    exclusivelyPrefixedNodeCoreModules,
    ExportAssignment,
    ExportDeclaration,
    Expression,
    ExpressionStatement,
    factory,
    FileTextChanges,
    filter,
    find,
    findAncestor,
    findConfigFile,
    first,
    firstDefined,
    firstOrUndefined,
    forEachAncestorDirectoryStoppingAtGlobalCache,
    forEachChild,
    forEachLeadingCommentRange,
    forEachTrailingCommentRange,
    FormatCodeSettings,
    formatStringFromArgs,
    formatting,
    FormattingHost,
    ForOfStatement,
    FunctionDeclaration,
    FunctionExpression,
    FunctionLikeDeclaration,
    FutureSourceFile,
    getAssignmentDeclarationKind,
    getBaseFileName,
    getCombinedNodeFlagsAlwaysIncludeJSDoc,
    getDirectoryPath,
    getEmitModuleKind,
    getEmitScriptTarget,
    getExternalModuleImportEqualsDeclarationExpression,
    getImpliedNodeFormatForEmitWorker,
    getImpliedNodeFormatForFile,
    getImpliedNodeFormatForFileWorker,
    getIndentString,
    getJSDocEnumTag,
    getLastChild,
    getLineAndCharacterOfPosition,
    getLineStarts,
    getLocaleSpecificMessage,
    getModuleInstanceState,
    getNameOfDeclaration,
    getNodeId,
    getOriginalNode,
    getPackageNameFromTypesPackageName,
    getPathComponents,
    getRootDeclaration,
    getSourceFileOfNode,
    getSpanOfTokenAtPosition,
    getSymbolId,
    getTextOfIdentifierOrLiteral,
    getTextOfNode,
    getTypesPackageName,
    hasJSFileExtension,
    hasSyntacticModifier,
    HeritageClause,
    hostGetCanonicalFileName,
    Identifier,
    identifierIsThisKeyword,
    identity,
    idText,
    IfStatement,
    ImportClause,
    ImportDeclaration,
    ImportSpecifier,
    ImportTypeNode,
    indexOfNode,
    IndexSignatureDeclaration,
    InternalNodeBuilderFlags,
    InternalSymbolName,
    isAmbientModule,
    isAnyImportSyntax,
    isArray,
    isArrayBindingPattern,
    isArrayTypeNode,
    isAsExpression,
    isAwaitExpression,
    isBinaryExpression,
    isBindingElement,
    isBreakOrContinueStatement,
    isCallExpression,
    isCallOrNewExpression,
    isClassDeclaration,
    isClassExpression,
    isClassStaticBlockDeclaration,
    isConditionalTypeNode,
    IScriptSnapshot,
    isDeclaration,
    isDeclarationName,
    isDecorator,
    isDefaultClause,
    isDeleteExpression,
    isElementAccessExpression,
    isEntityName,
    isEnumDeclaration,
    isEnumMember,
    isExportAssignment,
    isExportDeclaration,
    isExportSpecifier,
    isExpression,
    isExpressionNode,
    isExternalModule,
    isExternalModuleImportEqualsDeclaration,
    isExternalModuleReference,
    isExternalModuleSymbol,
    isFileLevelUniqueName,
    isForInStatement,
    isForOfStatement,
    isFullSourceFile,
    isFunctionBlock,
    isFunctionDeclaration,
    isFunctionExpression,
    isFunctionLike,
    isGetAccessorDeclaration,
    isHeritageClause,
    isIdentifier,
    isIdentifierPart,
    isIdentifierStart,
    isImportCall,
    isImportClause,
    isImportDeclaration,
    isImportEqualsDeclaration,
    isImportOrExportSpecifier,
    isImportSpecifier,
    isInferTypeNode,
    isInJSFile,
    isInterfaceDeclaration,
    isInternalModuleImportEqualsDeclaration,
    isJSDoc,
    isJSDocCommentContainingNode,
    isJSDocImportTag,
    isJSDocLink,
    isJSDocLinkCode,
    isJSDocLinkLike,
    isJSDocMemberName,
    isJSDocNameReference,
    isJSDocTag,
    isJSDocTemplateTag,
    isJSDocTypeAlias,
    isJsxElement,
    isJsxExpression,
    isJsxOpeningLikeElement,
    isJsxText,
    isKeyword,
    isLabeledStatement,
    isLet,
    isLiteralExpression,
    isLiteralTypeNode,
    isMappedTypeNode,
    isModifier,
    isModuleBlock,
    isModuleDeclaration,
    isNamedDeclaration,
    isNamedExports,
    isNamedImports,
    isNamespaceExport,
    isNamespaceImport,
    isNewExpression,
    isNumericLiteral,
    isObjectBindingPattern,
    isObjectLiteralExpression,
    isOptionalChain,
    isOptionalChainRoot,
    isParameter,
    isPartOfTypeNode,
    isPrivateIdentifier,
    isPropertyAccessExpression,
    isPropertyNameLiteral,
    isQualifiedName,
    isRequireCall,
    isRequireVariableStatement,
    isRightSideOfQualifiedNameOrPropertyAccess,
    isRootedDiskPath,
    isSatisfiesExpression,
    isSetAccessorDeclaration,
    isSourceFile,
    isSourceFileJS,
    isStringANonContextualKeyword,
    isStringDoubleQuoted,
    isStringLiteral,
    isStringLiteralLike,
    isStringOrNumericLiteralLike,
    isStringTextContainingNode,
    isSyntaxList,
    isTaggedTemplateExpression,
    isTemplateLiteralKind,
    isToken,
    isTransientSymbol,
    isTypeAliasDeclaration,
    isTypeElement,
    isTypeNode,
    isTypeOfExpression,
    isTypeOperatorNode,
    isTypeParameterDeclaration,
    isTypeReferenceNode,
    isVarConst,
    isVariableDeclarationList,
    isVoidExpression,
    isWhiteSpaceLike,
    isWhiteSpaceSingleLine,
    isYieldExpression,
    IterationStatement,
    JSDocImportTag,
    JSDocLink,
    JSDocLinkCode,
    JSDocLinkDisplayPart,
    JSDocLinkPlain,
    JSDocTypedefTag,
    JsxEmit,
    JsxOpeningLikeElement,
    JsxTagNameExpression,
    LabeledStatement,
    LanguageServiceHost,
    last,
    lastOrUndefined,
    LiteralExpression,
    map,
    maybeBind,
    Modifier,
    ModifierFlags,
    ModuleDeclaration,
    ModuleInstanceState,
    ModuleKind,
    ModuleResolutionHost,
    ModuleResolutionKind,
    ModuleSpecifierResolutionHost,
    moduleSpecifiers,
    Mutable,
    NewExpression,
    NewLineKind,
    Node,
    NodeArray,
    NodeBuilderFlags,
    nodeCoreModules,
    NodeFlags,
    nodeIsMissing,
    nodeIsPresent,
    nodeIsSynthesized,
    normalizePath,
    NoSubstitutionTemplateLiteral,
    notImplemented,
    NumericLiteral,
    or,
    OrganizeImports,
    PackageJsonDependencyGroup,
    parseBigInt,
    pathIsRelative,
    PrefixUnaryExpression,
    Program,
    ProjectPackageJsonInfo,
    PropertyAccessExpression,
    PropertyAssignment,
    PropertyName,
    PseudoBigInt,
    pseudoBigIntToString,
    QualifiedName,
    rangeContainsRange,
    RefactorContext,
    removeFileExtension,
    removeSuffix,
    Scanner,
    ScriptElementKind,
    ScriptElementKindModifier,
    ScriptKind,
    ScriptTarget,
    SemicolonPreference,
    setConfigFileInOptions,
    setOriginalNode,
    setParentRecursive,
    setTextRange,
    Signature,
    SignatureDeclaration,
    singleOrUndefined,
    skipAlias,
    skipOuterExpressions,
    skipParentheses,
    some,
    SourceFile,
    SourceFileLike,
    SourceMapper,
    SpreadElement,
    startsWith,
    StringLiteral,
    StringLiteralLike,
    stringToToken,
    stripQuotes,
    Symbol,
    SymbolAccessibility,
    SymbolDisplayPart,
    SymbolDisplayPartKind,
    SymbolFlags,
    SymbolFormatFlags,
    SymbolTracker,
    SyntaxKind,
    SyntaxList,
    TaggedTemplateExpression,
    TemplateExpression,
    TemplateLiteralToken,
    TemplateSpan,
    TextChange,
    textChanges,
    TextRange,
    TextSpan,
    textSpanContainsPosition,
    textSpanContainsTextSpan,
    textSpanEnd,
    Token,
    tokenToString,
    toPath,
    toSorted,
    tryCast,
    tryParseJson,
    Type,
    TypeChecker,
    TypeFlags,
    TypeFormatFlags,
    TypeNode,
    TypeOfExpression,
    TypeQueryNode,
    unescapeLeadingUnderscores,
    UserPreferences,
    VariableDeclaration,
    visitEachChild,
    VoidExpression,
    walkUpParenthesizedExpressions,
    YieldExpression,
} from "./_namespaces/ts.js";

// These utilities are common to multiple language service features.
// #region
/** @internal */
export const scanner: Scanner = createScanner(ScriptTarget.Latest, /*skipTrivia*/ true);

/** @internal */
export const enum SemanticMeaning {
    None = 0x0,
    Value = 0x1,
    Type = 0x2,
    Namespace = 0x4,
    All = Value | Type | Namespace,
}

/** 
 * @internal
 * Determines the semantic meaning of a given declaration node.
 * @param node The declaration node to analyze.
 */
export function getMeaningFromDeclaration(node: Node): SemanticMeaning {
    switch (node.kind) {
        case SyntaxKind.VariableDeclaration:
            return isInJSFile(node) && getJSDocEnumTag(node) ? SemanticMeaning.All : SemanticMeaning.Value;

        case SyntaxKind.Parameter:
        case SyntaxKind.BindingElement:
        case SyntaxKind.PropertyDeclaration:
        case SyntaxKind.PropertySignature:
        case SyntaxKind.PropertyAssignment:
        case SyntaxKind.ShorthandPropertyAssignment:
        case SyntaxKind.MethodDeclaration:
        case SyntaxKind.MethodSignature:
        case SyntaxKind.Constructor:
        case SyntaxKind.GetAccessor:
        case SyntaxKind.SetAccessor:
        case SyntaxKind.FunctionDeclaration:
        case SyntaxKind.FunctionExpression:
        case SyntaxKind.ArrowFunction:
        case SyntaxKind.CatchClause:
        case SyntaxKind.JsxAttribute:
            return SemanticMeaning.Value;

        case SyntaxKind.TypeParameter:
        case SyntaxKind.InterfaceDeclaration:
        case SyntaxKind.TypeAliasDeclaration:
        case SyntaxKind.TypeLiteral:
            return SemanticMeaning.Type;

        case SyntaxKind.JSDocTypedefTag:
            // If it has no name node, it shares the name with the value declaration below it.
            return (node as JSDocTypedefTag).name === undefined ? SemanticMeaning.Value | SemanticMeaning.Type : SemanticMeaning.Type;

        case SyntaxKind.EnumMember:
        case SyntaxKind.ClassDeclaration:
            return SemanticMeaning.Value | SemanticMeaning.Type;

        case SyntaxKind.ModuleDeclaration:
            if (isAmbientModule(node as ModuleDeclaration)) {
                return SemanticMeaning.Namespace | SemanticMeaning.Value;
            }
            else if (getModuleInstanceState(node as ModuleDeclaration) === ModuleInstanceState.Instantiated) {
                return SemanticMeaning.Namespace | SemanticMeaning.Value;
            }
            else {
                return SemanticMeaning.Namespace;
            }

        case SyntaxKind.EnumDeclaration:
        case SyntaxKind.NamedImports:
        case SyntaxKind.ImportSpecifier:
        case SyntaxKind.ImportEqualsDeclaration:
        case SyntaxKind.ImportDeclaration:
        case SyntaxKind.ExportAssignment:
        case SyntaxKind.ExportDeclaration:
            return SemanticMeaning.All;

        // An external module can be a Value
        case SyntaxKind.SourceFile:
            return SemanticMeaning.Namespace | SemanticMeaning.Value;
    }

    return SemanticMeaning.All;
}

/** 
 * @internal
 * Determines the semantic meaning of a node based on its location in the syntax tree.
 * Handles various cases such as source files, export/import statements, declaration names, 
 * type references, namespace references, and literal type nodes.
 * @param node The node whose semantic meaning is to be determined.
 */
export function getMeaningFromLocation(node: Node): SemanticMeaning {
    node = getAdjustedReferenceLocation(node);
    const parent = node.parent;
    if (node.kind === SyntaxKind.SourceFile) {
        return SemanticMeaning.Value;
    }
    else if (
        isExportAssignment(parent)
        || isExportSpecifier(parent)
        || isExternalModuleReference(parent)
        || isImportSpecifier(parent)
        || isImportClause(parent)
        || isImportEqualsDeclaration(parent) && node === parent.name
    ) {
        return SemanticMeaning.All;
    }
    else if (isInRightSideOfInternalImportEqualsDeclaration(node)) {
        return getMeaningFromRightHandSideOfImportEquals(node as Identifier);
    }
    else if (isDeclarationName(node)) {
        return getMeaningFromDeclaration(parent);
    }
    else if (isEntityName(node) && findAncestor(node, or(isJSDocNameReference, isJSDocLinkLike, isJSDocMemberName))) {
        return SemanticMeaning.All;
    }
    else if (isTypeReference(node)) {
        return SemanticMeaning.Type;
    }
    else if (isNamespaceReference(node)) {
        return SemanticMeaning.Namespace;
    }
    else if (isTypeParameterDeclaration(parent)) {
        Debug.assert(isJSDocTemplateTag(parent.parent)); // Else would be handled by isDeclarationName
        return SemanticMeaning.Type;
    }
    else if (isLiteralTypeNode(parent)) {
        // This might be T["name"], which is actually referencing a property and not a type. So allow both meanings.
        return SemanticMeaning.Type | SemanticMeaning.Value;
    }
    else {
        return SemanticMeaning.Value;
    }
}

function getMeaningFromRightHandSideOfImportEquals(node: Node): SemanticMeaning {
    //     import a = |b|; // Namespace
    //     import a = |b.c|; // Value, type, namespace
    //     import a = |b.c|.d; // Namespace
    const name = node.kind === SyntaxKind.QualifiedName ? node : isQualifiedName(node.parent) && node.parent.right === node ? node.parent : undefined;
    return name && name.parent.kind === SyntaxKind.ImportEqualsDeclaration ? SemanticMeaning.All : SemanticMeaning.Namespace;
}

/** 
 * Determines if a node is in the right side of an internal import equals declaration.
 * 
 * @param node - The node to check.
 */
export function isInRightSideOfInternalImportEqualsDeclaration(node: Node): boolean {
    while (node.parent.kind === SyntaxKind.QualifiedName) {
        node = node.parent;
    }
    return isInternalModuleImportEqualsDeclaration(node.parent) && node.parent.moduleReference === node;
}

function isNamespaceReference(node: Node): boolean {
    return isQualifiedNameNamespaceReference(node) || isPropertyAccessNamespaceReference(node);
}

function isQualifiedNameNamespaceReference(node: Node): boolean {
    let root = node;
    let isLastClause = true;
    if (root.parent.kind === SyntaxKind.QualifiedName) {
        while (root.parent && root.parent.kind === SyntaxKind.QualifiedName) {
            root = root.parent;
        }

        isLastClause = (root as QualifiedName).right === node;
    }

    return root.parent.kind === SyntaxKind.TypeReference && !isLastClause;
}

function isPropertyAccessNamespaceReference(node: Node): boolean {
    let root = node;
    let isLastClause = true;
    if (root.parent.kind === SyntaxKind.PropertyAccessExpression) {
        while (root.parent && root.parent.kind === SyntaxKind.PropertyAccessExpression) {
            root = root.parent;
        }

        isLastClause = (root as PropertyAccessExpression).name === node;
    }

    if (!isLastClause && root.parent.kind === SyntaxKind.ExpressionWithTypeArguments && root.parent.parent.kind === SyntaxKind.HeritageClause) {
        const decl = root.parent.parent.parent;
        return (decl.kind === SyntaxKind.ClassDeclaration && (root.parent.parent as HeritageClause).token === SyntaxKind.ImplementsKeyword) ||
            (decl.kind === SyntaxKind.InterfaceDeclaration && (root.parent.parent as HeritageClause).token === SyntaxKind.ExtendsKeyword);
    }

    return false;
}

function isTypeReference(node: Node): boolean {
    if (isRightSideOfQualifiedNameOrPropertyAccess(node)) {
        node = node.parent;
    }

    switch (node.kind) {
        case SyntaxKind.ThisKeyword:
            return !isExpressionNode(node);
        case SyntaxKind.ThisType:
            return true;
    }

    switch (node.parent.kind) {
        case SyntaxKind.TypeReference:
            return true;
        case SyntaxKind.ImportType:
            return !(node.parent as ImportTypeNode).isTypeOf;
        case SyntaxKind.ExpressionWithTypeArguments:
            return isPartOfTypeNode(node.parent);
    }

    return false;
}

/** 
 * @internal 
 * Determines if a node is the target of a call expression.
 * @param node The node to check.
 * @param includeElementAccess Whether to include element access expressions as potential targets.
 * @param skipPastOuterExpressions Whether to skip past outer expressions when checking the target.
 */
export function isCallExpressionTarget(node: Node, includeElementAccess = false, skipPastOuterExpressions = false): boolean {
    return isCalleeWorker(node, isCallExpression, selectExpressionOfCallOrNewExpressionOrDecorator, includeElementAccess, skipPastOuterExpressions);
}

/** 
 * @internal
 * Determines if a node is the target of a `new` expression.
 * @param node The node to test.
 * @param includeElementAccess Whether to include element access expressions as valid targets.
 * @param skipPastOuterExpressions Whether to skip past outer expressions when evaluating the target.
 */
export function isNewExpressionTarget(node: Node, includeElementAccess = false, skipPastOuterExpressions = false): boolean {
    return isCalleeWorker(node, isNewExpression, selectExpressionOfCallOrNewExpressionOrDecorator, includeElementAccess, skipPastOuterExpressions);
}

/** 
 * @internal 
 * Determines if a node is the target of a call or new expression.
 * @param node The node to check.
 * @param includeElementAccess Whether to include element access expressions as valid targets.
 * @param skipPastOuterExpressions Whether to skip past outer expressions when checking.
 */
export function isCallOrNewExpressionTarget(node: Node, includeElementAccess = false, skipPastOuterExpressions = false): boolean {
    return isCalleeWorker(node, isCallOrNewExpression, selectExpressionOfCallOrNewExpressionOrDecorator, includeElementAccess, skipPastOuterExpressions);
}

/**
 * @internal
 * Determines if the given node is a tagged template tag.
 * @param node The node to check.
 * @param includeElementAccess Whether to include element access expressions as valid tags.
 * @param skipPastOuterExpressions Whether to skip past outer expressions when checking.
 */
export function isTaggedTemplateTag(node: Node, includeElementAccess = false, skipPastOuterExpressions = false): boolean {
    return isCalleeWorker(node, isTaggedTemplateExpression, selectTagOfTaggedTemplateExpression, includeElementAccess, skipPastOuterExpressions);
}

/** 
 * @internal 
 * Determines if a node is a valid target for a decorator.
 * @param node The node to check.
 * @param includeElementAccess Whether to include element access expressions as valid targets.
 * @param skipPastOuterExpressions Whether to skip past outer expressions when checking the node.
 */
export function isDecoratorTarget(node: Node, includeElementAccess = false, skipPastOuterExpressions = false): boolean {
    return isCalleeWorker(node, isDecorator, selectExpressionOfCallOrNewExpressionOrDecorator, includeElementAccess, skipPastOuterExpressions);
}

/** 
 * @internal
 * Determines if the given node is a JSX opening-like element tag name.
 * @param node The node to check.
 * @param includeElementAccess Whether to include element access expressions.
 * @param skipPastOuterExpressions Whether to skip past outer expressions.
 */
export function isJsxOpeningLikeElementTagName(node: Node, includeElementAccess = false, skipPastOuterExpressions = false): boolean {
    return isCalleeWorker(node, isJsxOpeningLikeElement, selectTagNameOfJsxOpeningLikeElement, includeElementAccess, skipPastOuterExpressions);
}

function selectExpressionOfCallOrNewExpressionOrDecorator(node: CallExpression | NewExpression | Decorator) {
    return node.expression;
}

function selectTagOfTaggedTemplateExpression(node: TaggedTemplateExpression) {
    return node.tag;
}

function selectTagNameOfJsxOpeningLikeElement(node: JsxOpeningLikeElement) {
    return node.tagName;
}

function isCalleeWorker<T extends CallExpression | NewExpression | TaggedTemplateExpression | Decorator | JsxOpeningLikeElement>(node: Node, pred: (node: Node) => node is T, calleeSelector: (node: T) => Expression | JsxTagNameExpression, includeElementAccess: boolean, skipPastOuterExpressions: boolean) {
    let target = includeElementAccess ? climbPastPropertyOrElementAccess(node) : climbPastPropertyAccess(node);
    if (skipPastOuterExpressions) {
        target = skipOuterExpressions(target);
    }
    return !!target && !!target.parent && pred(target.parent) && calleeSelector(target.parent) === target;
}

/**
 * Returns the node itself if it is not the right-hand side of a property access; otherwise, returns the parent node.
 * @param node The node to check.
 */
export function climbPastPropertyAccess(node: Node): Node {
    return isRightSideOfPropertyAccess(node) ? node.parent : node;
}

function climbPastPropertyOrElementAccess(node: Node) {
    return isRightSideOfPropertyAccess(node) || isArgumentExpressionOfElementAccess(node) ? node.parent : node;
}

/** 
 * @internal 
 * Retrieves the target label with the specified name by traversing the parent nodes of the given reference node.
 * 
 * @param referenceNode - The starting node to search from.
 * @param labelName - The name of the label to find.
 * @returns The identifier of the target label if found, otherwise undefined.
 */
export function getTargetLabel(referenceNode: Node, labelName: string): Identifier | undefined {
    while (referenceNode) {
        if (referenceNode.kind === SyntaxKind.LabeledStatement && (referenceNode as LabeledStatement).label.escapedText === labelName) {
            return (referenceNode as LabeledStatement).label;
        }
        referenceNode = referenceNode.parent;
    }
    return undefined;
}

/**
 * Determines if a CallExpression has a property access expression with the specified name.
 * @param node The CallExpression to check.
 * @param funcName The name to compare against the property access expression's name.
 */
export function hasPropertyAccessExpressionWithName(node: CallExpression, funcName: string): boolean {
    if (!isPropertyAccessExpression(node.expression)) {
        return false;
    }

    return node.expression.name.text === funcName;
}

/** 
 * @internal 
 * Determines if a node is a jump statement target.
 * @param node - The node to check.
 */
export function isJumpStatementTarget(node: Node): node is Identifier & { parent: BreakOrContinueStatement; } {
    return isIdentifier(node) && tryCast(node.parent, isBreakOrContinueStatement)?.label === node;
}

/** 
 * @internal 
 * Determines if the given node is the label of a labeled statement.
 * @param node The node to check.
 */
export function isLabelOfLabeledStatement(node: Node): node is Identifier {
    return isIdentifier(node) && tryCast(node.parent, isLabeledStatement)?.label === node;
}

/** 
 * @internal 
 * Determines if the given node is a label name. 
 * A node is considered a label name if it is the label of a labeled statement or a jump statement target.
 */
export function isLabelName(node: Node): boolean {
    return isLabelOfLabeledStatement(node) || isJumpStatementTarget(node);
}

/** 
 * @internal 
 * Determines if the given node is a tag name in a JSDoc tag.
 * @param node The node to check.
 * @returns True if the node is a tag name; otherwise, false.
 */
export function isTagName(node: Node): boolean {
    return tryCast(node.parent, isJSDocTag)?.tagName === node;
}

/** 
 * @internal 
 * Determines if the given node is the right-hand side of a qualified name.
 * @param node The node to check.
 */
export function isRightSideOfQualifiedName(node: Node): boolean {
    return tryCast(node.parent, isQualifiedName)?.right === node;
}

/** 
 * @internal 
 * Determines if the given node is the right-hand side of a property access expression.
 * @param node The node to check.
 */
export function isRightSideOfPropertyAccess(node: Node): boolean {
    return tryCast(node.parent, isPropertyAccessExpression)?.name === node;
}

/**
 * Determines if the given node is the argument expression of an element access expression.
 * @param node The node to check.
 */
export function isArgumentExpressionOfElementAccess(node: Node): boolean {
    return tryCast(node.parent, isElementAccessExpression)?.argumentExpression === node;
}

/** 
 * @internal 
 * Determines if the given node is the name of a module declaration.
 * @param node The node to check.
 */
export function isNameOfModuleDeclaration(node: Node): boolean {
    return tryCast(node.parent, isModuleDeclaration)?.name === node;
}

/** 
 * @internal 
 * Determines if the given node is the name of a function declaration.
 * @param node The node to check.
 */
export function isNameOfFunctionDeclaration(node: Node): boolean {
    return isIdentifier(node) && tryCast(node.parent, isFunctionLike)?.name === node;
}

/** 
 * @internal
 * Determines if the given node is a literal name of a property declaration or index access.
 * @param node The node to check.
 */
export function isLiteralNameOfPropertyDeclarationOrIndexAccess(node: StringLiteral | NumericLiteral | NoSubstitutionTemplateLiteral): boolean {
    switch (node.parent.kind) {
        case SyntaxKind.PropertyDeclaration:
        case SyntaxKind.PropertySignature:
        case SyntaxKind.PropertyAssignment:
        case SyntaxKind.EnumMember:
        case SyntaxKind.MethodDeclaration:
        case SyntaxKind.MethodSignature:
        case SyntaxKind.GetAccessor:
        case SyntaxKind.SetAccessor:
        case SyntaxKind.ModuleDeclaration:
            return getNameOfDeclaration(node.parent as Declaration) === node;
        case SyntaxKind.ElementAccessExpression:
            return (node.parent as ElementAccessExpression).argumentExpression === node;
        case SyntaxKind.ComputedPropertyName:
            return true;
        case SyntaxKind.LiteralType:
            return node.parent.parent.kind === SyntaxKind.IndexedAccessType;
        default:
            return false;
    }
}

/** 
 * @internal 
 * Determines if the given node is the expression of an external module import equals declaration.
 * @param node The node to check.
 */
export function isExpressionOfExternalModuleImportEqualsDeclaration(node: Node): boolean {
    return isExternalModuleImportEqualsDeclaration(node.parent.parent) &&
        getExternalModuleImportEqualsDeclarationExpression(node.parent.parent) === node;
}

/** 
 * @internal 
 * Gets the container node for a given node. 
 * If the node is a JSDoc type alias, it navigates to the parent scope of the alias. 
 * Continues traversing up the parent chain until a container node is found or the root is reached. 
 * Returns undefined if no container node is found. 
 */
export function getContainerNode(node: Node): Declaration | undefined {
    if (isJSDocTypeAlias(node)) {
        // This doesn't just apply to the node immediately under the comment, but to everything in its parent's scope.
        // node.parent = the JSDoc comment, node.parent.parent = the node having the comment.
        // Then we get parent again in the loop.
        node = node.parent.parent;
    }

    while (true) {
        node = node.parent;
        if (!node) {
            return undefined;
        }
        switch (node.kind) {
            case SyntaxKind.SourceFile:
            case SyntaxKind.MethodDeclaration:
            case SyntaxKind.MethodSignature:
            case SyntaxKind.FunctionDeclaration:
            case SyntaxKind.FunctionExpression:
            case SyntaxKind.GetAccessor:
            case SyntaxKind.SetAccessor:
            case SyntaxKind.ClassDeclaration:
            case SyntaxKind.InterfaceDeclaration:
            case SyntaxKind.EnumDeclaration:
            case SyntaxKind.ModuleDeclaration:
                return node as Declaration;
        }
    }
}

/** 
 * @internal
 * Determines the kind of a given node and returns the corresponding ScriptElementKind.
 * 
 * @param node - The node for which the kind is to be determined.
 */
export function getNodeKind(node: Node): ScriptElementKind {
    switch (node.kind) {
        case SyntaxKind.SourceFile:
            return isExternalModule(node as SourceFile) ? ScriptElementKind.moduleElement : ScriptElementKind.scriptElement;
        case SyntaxKind.ModuleDeclaration:
            return ScriptElementKind.moduleElement;
        case SyntaxKind.ClassDeclaration:
        case SyntaxKind.ClassExpression:
            return ScriptElementKind.classElement;
        case SyntaxKind.InterfaceDeclaration:
            return ScriptElementKind.interfaceElement;
        case SyntaxKind.TypeAliasDeclaration:
        case SyntaxKind.JSDocCallbackTag:
        case SyntaxKind.JSDocTypedefTag:
            return ScriptElementKind.typeElement;
        case SyntaxKind.EnumDeclaration:
            return ScriptElementKind.enumElement;
        case SyntaxKind.VariableDeclaration:
            return getKindOfVariableDeclaration(node as VariableDeclaration);
        case SyntaxKind.BindingElement:
            return getKindOfVariableDeclaration(getRootDeclaration(node) as VariableDeclaration);
        case SyntaxKind.ArrowFunction:
        case SyntaxKind.FunctionDeclaration:
        case SyntaxKind.FunctionExpression:
            return ScriptElementKind.functionElement;
        case SyntaxKind.GetAccessor:
            return ScriptElementKind.memberGetAccessorElement;
        case SyntaxKind.SetAccessor:
            return ScriptElementKind.memberSetAccessorElement;
        case SyntaxKind.MethodDeclaration:
        case SyntaxKind.MethodSignature:
            return ScriptElementKind.memberFunctionElement;
        case SyntaxKind.PropertyAssignment:
            const { initializer } = node as PropertyAssignment;
            return isFunctionLike(initializer) ? ScriptElementKind.memberFunctionElement : ScriptElementKind.memberVariableElement;
        case SyntaxKind.PropertyDeclaration:
        case SyntaxKind.PropertySignature:
        case SyntaxKind.ShorthandPropertyAssignment:
        case SyntaxKind.SpreadAssignment:
            return ScriptElementKind.memberVariableElement;
        case SyntaxKind.IndexSignature:
            return ScriptElementKind.indexSignatureElement;
        case SyntaxKind.ConstructSignature:
            return ScriptElementKind.constructSignatureElement;
        case SyntaxKind.CallSignature:
            return ScriptElementKind.callSignatureElement;
        case SyntaxKind.Constructor:
        case SyntaxKind.ClassStaticBlockDeclaration:
            return ScriptElementKind.constructorImplementationElement;
        case SyntaxKind.TypeParameter:
            return ScriptElementKind.typeParameterElement;
        case SyntaxKind.EnumMember:
            return ScriptElementKind.enumMemberElement;
        case SyntaxKind.Parameter:
            return hasSyntacticModifier(node, ModifierFlags.ParameterPropertyModifier) ? ScriptElementKind.memberVariableElement : ScriptElementKind.parameterElement;
        case SyntaxKind.ImportEqualsDeclaration:
        case SyntaxKind.ImportSpecifier:
        case SyntaxKind.ExportSpecifier:
        case SyntaxKind.NamespaceImport:
        case SyntaxKind.NamespaceExport:
            return ScriptElementKind.alias;
        case SyntaxKind.BinaryExpression:
            const kind = getAssignmentDeclarationKind(node as BinaryExpression);
            const { right } = node as BinaryExpression;
            switch (kind) {
                case AssignmentDeclarationKind.ObjectDefinePropertyValue:
                case AssignmentDeclarationKind.ObjectDefinePropertyExports:
                case AssignmentDeclarationKind.ObjectDefinePrototypeProperty:
                case AssignmentDeclarationKind.None:
                    return ScriptElementKind.unknown;
                case AssignmentDeclarationKind.ExportsProperty:
                case AssignmentDeclarationKind.ModuleExports:
                    const rightKind = getNodeKind(right);
                    return rightKind === ScriptElementKind.unknown ? ScriptElementKind.constElement : rightKind;
                case AssignmentDeclarationKind.PrototypeProperty:
                    return isFunctionExpression(right) ? ScriptElementKind.memberFunctionElement : ScriptElementKind.memberVariableElement;
                case AssignmentDeclarationKind.ThisProperty:
                    return ScriptElementKind.memberVariableElement; // property
                case AssignmentDeclarationKind.Property:
                    // static method / property
                    return isFunctionExpression(right) ? ScriptElementKind.memberFunctionElement : ScriptElementKind.memberVariableElement;
                case AssignmentDeclarationKind.Prototype:
                    return ScriptElementKind.localClassElement;
                default: {
                    assertType<never>(kind);
                    return ScriptElementKind.unknown;
                }
            }
        case SyntaxKind.Identifier:
            return isImportClause(node.parent) ? ScriptElementKind.alias : ScriptElementKind.unknown;
        case SyntaxKind.ExportAssignment:
            const scriptKind = getNodeKind((node as ExportAssignment).expression);
            // If the expression didn't come back with something (like it does for an identifiers)
            return scriptKind === ScriptElementKind.unknown ? ScriptElementKind.constElement : scriptKind;
        default:
            return ScriptElementKind.unknown;
    }

    function getKindOfVariableDeclaration(v: VariableDeclaration): ScriptElementKind {
        return isVarConst(v)
            ? ScriptElementKind.constElement
            : isLet(v)
            ? ScriptElementKind.letElement
            : ScriptElementKind.variableElement;
    }
}

/** 
 * @internal 
 * Determines if a node represents the 'this' keyword or 'this' as a parameter.
 * @param node The node to check.
 */
export function isThis(node: Node): boolean {
    switch (node.kind) {
        case SyntaxKind.ThisKeyword:
            // case SyntaxKind.ThisType: TODO: GH#9267
            return true;
        case SyntaxKind.Identifier:
            // 'this' as a parameter
            return identifierIsThisKeyword(node as Identifier) && node.parent.kind === SyntaxKind.Parameter;
        default:
            return false;
    }
}

// Matches the beginning of a triple slash directive
const tripleSlashDirectivePrefixRegex = /^\/\/\/\s*</;

/** @internal */
export interface ListItemInfo {
    listItemIndex: number;
    list: Node;
}

/** 
 * @internal 
 * Gets the start position of the line for a given position in the source file.
 * @param position The position in the source file.
 * @param sourceFile The source file to retrieve line information from.
 */
export function getLineStartPositionForPosition(position: number, sourceFile: SourceFileLike): number {
    const lineStarts = getLineStarts(sourceFile);
    const line = sourceFile.getLineAndCharacterOfPosition(position).line;
    return lineStarts[line];
}

/**
 * @internal
 * Determines if one range is entirely contained within another range, excluding the boundaries.
 * @param r1 - The outer range.
 * @param r2 - The inner range to check.
 */
export function rangeContainsRangeExclusive(r1: TextRange, r2: TextRange): boolean {
    return rangeContainsPositionExclusive(r1, r2.pos) && rangeContainsPositionExclusive(r1, r2.end);
}

/** 
 * @internal
 * Determines if a given position is within the range.
 * @param r The range to check.
 * @param pos The position to test.
 */
export function rangeContainsPosition(r: TextRange, pos: number): boolean {
    return r.pos <= pos && pos <= r.end;
}

/** 
 * @internal 
 * Checks if a position is exclusively within a given range.
 * @param r The range to check against.
 * @param pos The position to check.
 */
export function rangeContainsPositionExclusive(r: TextRange, pos: number): boolean {
    return r.pos < pos && pos < r.end;
}

/** 
 * @internal 
 * Checks if the given range contains the specified start and end positions.
 * @param range The range to check.
 * @param start The start position to check.
 * @param end The end position to check.
 */
export function rangeContainsStartEnd(range: TextRange, start: number, end: number): boolean {
    return range.pos <= start && range.end >= end;
}

/** 
 * @internal 
 * Determines if the range overlaps with the specified start and end positions.
 * @param r1 The range to check.
 * @param start The start position to compare.
 * @param end The end position to compare.
 */
export function rangeOverlapsWithStartEnd(r1: TextRange, start: number, end: number): boolean {
    return startEndOverlapsWithStartEnd(r1.pos, r1.end, start, end);
}

/** 
 * @internal 
 * Determines if a node overlaps with a specified start and end position in the source file.
 * @param node The node to check for overlap.
 * @param sourceFile The source file containing the node.
 * @param start The start position to check against.
 * @param end The end position to check against.
 */
export function nodeOverlapsWithStartEnd(node: Node, sourceFile: SourceFile, start: number, end: number): boolean {
    return startEndOverlapsWithStartEnd(node.getStart(sourceFile), node.end, start, end);
}

/** 
 * @internal 
 * Determines if the range defined by [start1, end1] overlaps with the range defined by [start2, end2].
 * @param start1 The start of the first range.
 * @param end1 The end of the first range.
 * @param start2 The start of the second range.
 * @param end2 The end of the second range.
 */
export function startEndOverlapsWithStartEnd(start1: number, end1: number, start2: number, end2: number): boolean {
    const start = Math.max(start1, start2);
    const end = Math.min(end1, end2);
    return start < end;
}

/**
 * Assumes `candidate.pos <= position` holds.
 *
 * Checks if the given position belongs to the specified node in the source file.
 *
 * @param candidate The node to check against.
 * @param position The position to verify.
 * @param sourceFile The source file containing the node.
 *
 * @internal
 */
export function positionBelongsToNode(candidate: Node, position: number, sourceFile: SourceFile): boolean {
    Debug.assert(candidate.pos <= position);
    return position < candidate.end || !isCompletedNode(candidate, sourceFile);
}

function isCompletedNode(n: Node | undefined, sourceFile: SourceFile): boolean {
    if (n === undefined || nodeIsMissing(n)) {
        return false;
    }

    switch (n.kind) {
        case SyntaxKind.ClassDeclaration:
        case SyntaxKind.InterfaceDeclaration:
        case SyntaxKind.EnumDeclaration:
        case SyntaxKind.ObjectLiteralExpression:
        case SyntaxKind.ObjectBindingPattern:
        case SyntaxKind.TypeLiteral:
        case SyntaxKind.Block:
        case SyntaxKind.ModuleBlock:
        case SyntaxKind.CaseBlock:
        case SyntaxKind.NamedImports:
        case SyntaxKind.NamedExports:
            return nodeEndsWith(n, SyntaxKind.CloseBraceToken, sourceFile);
        case SyntaxKind.CatchClause:
            return isCompletedNode((n as CatchClause).block, sourceFile);
        case SyntaxKind.NewExpression:
            if (!(n as NewExpression).arguments) {
                return true;
            }
        // falls through

        case SyntaxKind.CallExpression:
        case SyntaxKind.ParenthesizedExpression:
        case SyntaxKind.ParenthesizedType:
            return nodeEndsWith(n, SyntaxKind.CloseParenToken, sourceFile);

        case SyntaxKind.FunctionType:
        case SyntaxKind.ConstructorType:
            return isCompletedNode((n as SignatureDeclaration).type, sourceFile);

        case SyntaxKind.Constructor:
        case SyntaxKind.GetAccessor:
        case SyntaxKind.SetAccessor:
        case SyntaxKind.FunctionDeclaration:
        case SyntaxKind.FunctionExpression:
        case SyntaxKind.MethodDeclaration:
        case SyntaxKind.MethodSignature:
        case SyntaxKind.ConstructSignature:
        case SyntaxKind.CallSignature:
        case SyntaxKind.ArrowFunction:
            if ((n as FunctionLikeDeclaration).body) {
                return isCompletedNode((n as FunctionLikeDeclaration).body, sourceFile);
            }

            if ((n as FunctionLikeDeclaration).type) {
                return isCompletedNode((n as FunctionLikeDeclaration).type, sourceFile);
            }

            // Even though type parameters can be unclosed, we can get away with
            // having at least a closing paren.
            return hasChildOfKind(n, SyntaxKind.CloseParenToken, sourceFile);

        case SyntaxKind.ModuleDeclaration:
            return !!(n as ModuleDeclaration).body && isCompletedNode((n as ModuleDeclaration).body, sourceFile);

        case SyntaxKind.IfStatement:
            if ((n as IfStatement).elseStatement) {
                return isCompletedNode((n as IfStatement).elseStatement, sourceFile);
            }
            return isCompletedNode((n as IfStatement).thenStatement, sourceFile);

        case SyntaxKind.ExpressionStatement:
            return isCompletedNode((n as ExpressionStatement).expression, sourceFile) ||
                hasChildOfKind(n, SyntaxKind.SemicolonToken, sourceFile);

        case SyntaxKind.ArrayLiteralExpression:
        case SyntaxKind.ArrayBindingPattern:
        case SyntaxKind.ElementAccessExpression:
        case SyntaxKind.ComputedPropertyName:
        case SyntaxKind.TupleType:
            return nodeEndsWith(n, SyntaxKind.CloseBracketToken, sourceFile);

        case SyntaxKind.IndexSignature:
            if ((n as IndexSignatureDeclaration).type) {
                return isCompletedNode((n as IndexSignatureDeclaration).type, sourceFile);
            }

            return hasChildOfKind(n, SyntaxKind.CloseBracketToken, sourceFile);

        case SyntaxKind.CaseClause:
        case SyntaxKind.DefaultClause:
            // there is no such thing as terminator token for CaseClause/DefaultClause so for simplicity always consider them non-completed
            return false;

        case SyntaxKind.ForStatement:
        case SyntaxKind.ForInStatement:
        case SyntaxKind.ForOfStatement:
        case SyntaxKind.WhileStatement:
            return isCompletedNode((n as IterationStatement).statement, sourceFile);
        case SyntaxKind.DoStatement:
            // rough approximation: if DoStatement has While keyword - then if node is completed is checking the presence of ')';
            return hasChildOfKind(n, SyntaxKind.WhileKeyword, sourceFile)
                ? nodeEndsWith(n, SyntaxKind.CloseParenToken, sourceFile)
                : isCompletedNode((n as DoStatement).statement, sourceFile);

        case SyntaxKind.TypeQuery:
            return isCompletedNode((n as TypeQueryNode).exprName, sourceFile);

        case SyntaxKind.TypeOfExpression:
        case SyntaxKind.DeleteExpression:
        case SyntaxKind.VoidExpression:
        case SyntaxKind.YieldExpression:
        case SyntaxKind.SpreadElement:
            const unaryWordExpression = n as (TypeOfExpression | DeleteExpression | VoidExpression | YieldExpression | SpreadElement);
            return isCompletedNode(unaryWordExpression.expression, sourceFile);

        case SyntaxKind.TaggedTemplateExpression:
            return isCompletedNode((n as TaggedTemplateExpression).template, sourceFile);
        case SyntaxKind.TemplateExpression:
            const lastSpan = lastOrUndefined((n as TemplateExpression).templateSpans);
            return isCompletedNode(lastSpan, sourceFile);
        case SyntaxKind.TemplateSpan:
            return nodeIsPresent((n as TemplateSpan).literal);

        case SyntaxKind.ExportDeclaration:
        case SyntaxKind.ImportDeclaration:
            return nodeIsPresent((n as ExportDeclaration | ImportDeclaration).moduleSpecifier);

        case SyntaxKind.PrefixUnaryExpression:
            return isCompletedNode((n as PrefixUnaryExpression).operand, sourceFile);
        case SyntaxKind.BinaryExpression:
            return isCompletedNode((n as BinaryExpression).right, sourceFile);
        case SyntaxKind.ConditionalExpression:
            return isCompletedNode((n as ConditionalExpression).whenFalse, sourceFile);

        default:
            return true;
    }
}

/*
 * Checks if node ends with 'expectedLastToken'.
 * If child at position 'length - 1' is 'SemicolonToken' it is skipped and 'expectedLastToken' is compared with child at position 'length - 2'.
 */
function nodeEndsWith(n: Node, expectedLastToken: SyntaxKind, sourceFile: SourceFile): boolean {
    const children = n.getChildren(sourceFile);
    if (children.length) {
        const lastChild = last(children);
        if (lastChild.kind === expectedLastToken) {
            return true;
        }
        else if (lastChild.kind === SyntaxKind.SemicolonToken && children.length !== 1) {
            return children[children.length - 2].kind === expectedLastToken;
        }
    }
    return false;
}

/** 
 * @internal 
 * Finds information about a list item in a containing list.
 * 
 * @param node - The node to find the list item information for.
 * @returns An object containing the list and the index of the item in the list, or undefined if the node is not part of a list.
 */
export function findListItemInfo(node: Node): ListItemInfo | undefined {
    const list = findContainingList(node);

    // It is possible at this point for syntaxList to be undefined, either if
    // node.parent had no list child, or if none of its list children contained
    // the span of node. If this happens, return undefined. The caller should
    // handle this case.
    if (!list) {
        return undefined;
    }

    const children = list.getChildren();
    const listItemIndex = indexOfNode(children, node);

    return {
        listItemIndex,
        list,
    };
}

function hasChildOfKind(n: Node, kind: SyntaxKind, sourceFile: SourceFile): boolean {
    return !!findChildOfKind(n, kind, sourceFile);
}

/** 
 * @internal 
 * Finds a child node of a specific kind within a given node's children.
 * @param n The parent node to search within.
 * @param kind The kind of child node to find.
 * @param sourceFile The source file context for retrieving children.
 * @returns The child node of the specified kind, or undefined if not found.
 */
export function findChildOfKind<T extends Node>(n: Node, kind: T["kind"], sourceFile: SourceFileLike): T | undefined {
    return find(n.getChildren(sourceFile), (c): c is T => c.kind === kind);
}

/** 
 * @internal 
 * Finds the SyntaxList containing the given node, if any.
 * The node might be a list element (nonsynthetic) or a comma (synthetic). Either way, it will
 * be parented by the container of the SyntaxList, not the SyntaxList itself.
 * In order to find the list item index, this function first locates the SyntaxList itself and then searches
 * for the position of the relevant node (or comma).
 * 
 * @param node The node for which to find the containing SyntaxList.
 * @returns The containing SyntaxList, or undefined if none is found.
 */
export function findContainingList(node: Node): SyntaxList | undefined {
    // The node might be a list element (nonsynthetic) or a comma (synthetic). Either way, it will
    // be parented by the container of the SyntaxList, not the SyntaxList itself.
    // In order to find the list item index, we first need to locate SyntaxList itself and then search
    // for the position of the relevant node (or comma).
    const syntaxList = find(node.parent.getChildren(), (c): c is SyntaxList => isSyntaxList(c) && rangeContainsRange(c, node));
    // Either we didn't find an appropriate list, or the list must contain us.
    Debug.assert(!syntaxList || contains(syntaxList.getChildren(), node));
    return syntaxList;
}

function isDefaultModifier(node: Node) {
    return node.kind === SyntaxKind.DefaultKeyword;
}

function isClassKeyword(node: Node) {
    return node.kind === SyntaxKind.ClassKeyword;
}

function isFunctionKeyword(node: Node) {
    return node.kind === SyntaxKind.FunctionKeyword;
}

function getAdjustedLocationForClass(node: ClassDeclaration | ClassExpression) {
    if (isNamedDeclaration(node)) {
        return node.name;
    }
    if (isClassDeclaration(node)) {
        // for class and function declarations, use the `default` modifier
        // when the declaration is unnamed.
        const defaultModifier = node.modifiers && find(node.modifiers, isDefaultModifier);
        if (defaultModifier) return defaultModifier;
    }
    if (isClassExpression(node)) {
        // for class expressions, use the `class` keyword when the class is unnamed
        const classKeyword = find(node.getChildren(), isClassKeyword);
        if (classKeyword) return classKeyword;
    }
}

function getAdjustedLocationForFunction(node: FunctionDeclaration | FunctionExpression) {
    if (isNamedDeclaration(node)) {
        return node.name;
    }
    if (isFunctionDeclaration(node)) {
        // for class and function declarations, use the `default` modifier
        // when the declaration is unnamed.
        const defaultModifier = find(node.modifiers, isDefaultModifier);
        if (defaultModifier) return defaultModifier;
    }
    if (isFunctionExpression(node)) {
        // for function expressions, use the `function` keyword when the function is unnamed
        const functionKeyword = find(node.getChildren(), isFunctionKeyword);
        if (functionKeyword) return functionKeyword;
    }
}

function getAncestorTypeNode(node: Node) {
    let lastTypeNode: TypeNode | undefined;
    findAncestor(node, a => {
        if (isTypeNode(a)) {
            lastTypeNode = a;
        }
        return !isQualifiedName(a.parent) && !isTypeNode(a.parent) && !isTypeElement(a.parent);
    });
    return lastTypeNode;
}

/** 
 * @internal
 * Gets the contextual type of a node from its parent or an ancestor type node.
 * @param node The expression node to get the contextual type for.
 * @param checker The type checker to use for retrieving types.
 */
export function getContextualTypeFromParentOrAncestorTypeNode(node: Expression, checker: TypeChecker): Type | undefined {
    if (node.flags & (NodeFlags.JSDoc & ~NodeFlags.JavaScriptFile)) return undefined;

    const contextualType = getContextualTypeFromParent(node, checker);
    if (contextualType) return contextualType;

    const ancestorTypeNode = getAncestorTypeNode(node);
    return ancestorTypeNode && checker.getTypeAtLocation(ancestorTypeNode);
}

function getAdjustedLocationForDeclaration(node: Node, forRename: boolean) {
    if (!forRename) {
        switch (node.kind) {
            case SyntaxKind.ClassDeclaration:
            case SyntaxKind.ClassExpression:
                return getAdjustedLocationForClass(node as ClassDeclaration | ClassExpression);
            case SyntaxKind.FunctionDeclaration:
            case SyntaxKind.FunctionExpression:
                return getAdjustedLocationForFunction(node as FunctionDeclaration | FunctionExpression);
            case SyntaxKind.Constructor:
                return node;
        }
    }
    if (isNamedDeclaration(node)) {
        return node.name;
    }
}

function getAdjustedLocationForImportDeclaration(node: ImportDeclaration | JSDocImportTag, forRename: boolean) {
    if (node.importClause) {
        if (node.importClause.name && node.importClause.namedBindings) {
            // do not adjust if we have both a name and named bindings
            return;
        }

        // /**/import [|name|] from ...;
        // import /**/type [|name|] from ...;
        if (node.importClause.name) {
            return node.importClause.name;
        }

        // /**/import { [|name|] } from ...;
        // /**/import { propertyName as [|name|] } from ...;
        // /**/import * as [|name|] from ...;
        // import /**/type { [|name|] } from ...;
        // import /**/type { propertyName as [|name|] } from ...;
        // import /**/type * as [|name|] from ...;
        if (node.importClause.namedBindings) {
            if (isNamedImports(node.importClause.namedBindings)) {
                // do nothing if there is more than one binding
                const onlyBinding = singleOrUndefined(node.importClause.namedBindings.elements);
                if (!onlyBinding) {
                    return;
                }
                return onlyBinding.name;
            }
            else if (isNamespaceImport(node.importClause.namedBindings)) {
                return node.importClause.namedBindings.name;
            }
        }
    }
    if (!forRename) {
        // /**/import "[|module|]";
        // /**/import ... from "[|module|]";
        // import /**/type ... from "[|module|]";
        return node.moduleSpecifier;
    }
}

function getAdjustedLocationForExportDeclaration(node: ExportDeclaration, forRename: boolean) {
    if (node.exportClause) {
        // /**/export { [|name|] } ...
        // /**/export { propertyName as [|name|] } ...
        // /**/export * as [|name|] ...
        // export /**/type { [|name|] } from ...
        // export /**/type { propertyName as [|name|] } from ...
        // export /**/type * as [|name|] ...
        if (isNamedExports(node.exportClause)) {
            // do nothing if there is more than one binding
            const onlyBinding = singleOrUndefined(node.exportClause.elements);
            if (!onlyBinding) {
                return;
            }
            return node.exportClause.elements[0].name;
        }
        else if (isNamespaceExport(node.exportClause)) {
            return node.exportClause.name;
        }
    }
    if (!forRename) {
        // /**/export * from "[|module|]";
        // export /**/type * from "[|module|]";
        return node.moduleSpecifier;
    }
}

function getAdjustedLocationForHeritageClause(node: HeritageClause) {
    // /**/extends [|name|]
    // /**/implements [|name|]
    if (node.types.length === 1) {
        return node.types[0].expression;
    }

    // /**/extends name1, name2 ...
    // /**/implements name1, name2 ...
}

function getAdjustedLocation(node: Node, forRename: boolean): Node {
    const { parent } = node;
    // /**/<modifier> [|name|] ...
    // /**/<modifier> <class|interface|type|enum|module|namespace|function|get|set> [|name|] ...
    // /**/<class|interface|type|enum|module|namespace|function|get|set> [|name|] ...
    // /**/import [|name|] = ...
    //
    // NOTE: If the node is a modifier, we don't adjust its location if it is the `default` modifier as that is handled
    // specially by `getSymbolAtLocation`.
    if (
        isModifier(node) && (forRename || node.kind !== SyntaxKind.DefaultKeyword) ? canHaveModifiers(parent) && contains(parent.modifiers, node) :
            node.kind === SyntaxKind.ClassKeyword ? isClassDeclaration(parent) || isClassExpression(node) :
            node.kind === SyntaxKind.FunctionKeyword ? isFunctionDeclaration(parent) || isFunctionExpression(node) :
            node.kind === SyntaxKind.InterfaceKeyword ? isInterfaceDeclaration(parent) :
            node.kind === SyntaxKind.EnumKeyword ? isEnumDeclaration(parent) :
            node.kind === SyntaxKind.TypeKeyword ? isTypeAliasDeclaration(parent) :
            node.kind === SyntaxKind.NamespaceKeyword || node.kind === SyntaxKind.ModuleKeyword ? isModuleDeclaration(parent) :
            node.kind === SyntaxKind.ImportKeyword ? isImportEqualsDeclaration(parent) :
            node.kind === SyntaxKind.GetKeyword ? isGetAccessorDeclaration(parent) :
            node.kind === SyntaxKind.SetKeyword && isSetAccessorDeclaration(parent)
    ) {
        const location = getAdjustedLocationForDeclaration(parent, forRename);
        if (location) {
            return location;
        }
    }
    // /**/<var|let|const> [|name|] ...
    if (
        (node.kind === SyntaxKind.VarKeyword || node.kind === SyntaxKind.ConstKeyword || node.kind === SyntaxKind.LetKeyword) &&
        isVariableDeclarationList(parent) && parent.declarations.length === 1
    ) {
        const decl = parent.declarations[0];
        if (isIdentifier(decl.name)) {
            return decl.name;
        }
    }
    if (node.kind === SyntaxKind.TypeKeyword) {
        // import /**/type [|name|] from ...;
        // import /**/type { [|name|] } from ...;
        // import /**/type { propertyName as [|name|] } from ...;
        // import /**/type ... from "[|module|]";
        if (isImportClause(parent) && parent.isTypeOnly) {
            const location = getAdjustedLocationForImportDeclaration(parent.parent, forRename);
            if (location) {
                return location;
            }
        }
        // export /**/type { [|name|] } from ...;
        // export /**/type { propertyName as [|name|] } from ...;
        // export /**/type * from "[|module|]";
        // export /**/type * as ... from "[|module|]";
        if (isExportDeclaration(parent) && parent.isTypeOnly) {
            const location = getAdjustedLocationForExportDeclaration(parent, forRename);
            if (location) {
                return location;
            }
        }
    }
    // import { propertyName /**/as [|name|] } ...
    // import * /**/as [|name|] ...
    // export { propertyName /**/as [|name|] } ...
    // export * /**/as [|name|] ...
    if (node.kind === SyntaxKind.AsKeyword) {
        if (
            isImportSpecifier(parent) && parent.propertyName ||
            isExportSpecifier(parent) && parent.propertyName ||
            isNamespaceImport(parent) ||
            isNamespaceExport(parent)
        ) {
            return parent.name;
        }
        if (isExportDeclaration(parent) && parent.exportClause && isNamespaceExport(parent.exportClause)) {
            return parent.exportClause.name;
        }
    }
    // /**/import [|name|] from ...;
    // /**/import { [|name|] } from ...;
    // /**/import { propertyName as [|name|] } from ...;
    // /**/import ... from "[|module|]";
    // /**/import "[|module|]";
    if (node.kind === SyntaxKind.ImportKeyword && isImportDeclaration(parent)) {
        const location = getAdjustedLocationForImportDeclaration(parent, forRename);
        if (location) {
            return location;
        }
    }
    if (node.kind === SyntaxKind.ExportKeyword) {
        // /**/export { [|name|] } ...;
        // /**/export { propertyName as [|name|] } ...;
        // /**/export * from "[|module|]";
        // /**/export * as ... from "[|module|]";
        if (isExportDeclaration(parent)) {
            const location = getAdjustedLocationForExportDeclaration(parent, forRename);
            if (location) {
                return location;
            }
        }
        // NOTE: We don't adjust the location of the `default` keyword as that is handled specially by `getSymbolAtLocation`.
        // /**/export default [|name|];
        // /**/export = [|name|];
        if (isExportAssignment(parent)) {
            return skipOuterExpressions(parent.expression);
        }
    }
    // import name = /**/require("[|module|]");
    if (node.kind === SyntaxKind.RequireKeyword && isExternalModuleReference(parent)) {
        return parent.expression;
    }
    // import ... /**/from "[|module|]";
    // export ... /**/from "[|module|]";
    if (node.kind === SyntaxKind.FromKeyword && (isImportDeclaration(parent) || isExportDeclaration(parent)) && parent.moduleSpecifier) {
        return parent.moduleSpecifier;
    }
    // class ... /**/extends [|name|] ...
    // class ... /**/implements [|name|] ...
    // class ... /**/implements name1, name2 ...
    // interface ... /**/extends [|name|] ...
    // interface ... /**/extends name1, name2 ...
    if ((node.kind === SyntaxKind.ExtendsKeyword || node.kind === SyntaxKind.ImplementsKeyword) && isHeritageClause(parent) && parent.token === node.kind) {
        const location = getAdjustedLocationForHeritageClause(parent);
        if (location) {
            return location;
        }
    }
    if (node.kind === SyntaxKind.ExtendsKeyword) {
        // ... <T /**/extends [|U|]> ...
        if (isTypeParameterDeclaration(parent) && parent.constraint && isTypeReferenceNode(parent.constraint)) {
            return parent.constraint.typeName;
        }
        // ... T /**/extends [|U|] ? ...
        if (isConditionalTypeNode(parent) && isTypeReferenceNode(parent.extendsType)) {
            return parent.extendsType.typeName;
        }
    }
    // ... T extends /**/infer [|U|] ? ...
    if (node.kind === SyntaxKind.InferKeyword && isInferTypeNode(parent)) {
        return parent.typeParameter.name;
    }
    // { [ [|K|] /**/in keyof T]: ... }
    if (node.kind === SyntaxKind.InKeyword && isTypeParameterDeclaration(parent) && isMappedTypeNode(parent.parent)) {
        return parent.name;
    }
    // /**/keyof [|T|]
    if (
        node.kind === SyntaxKind.KeyOfKeyword && isTypeOperatorNode(parent) && parent.operator === SyntaxKind.KeyOfKeyword &&
        isTypeReferenceNode(parent.type)
    ) {
        return parent.type.typeName;
    }
    // /**/readonly [|name|][]
    if (
        node.kind === SyntaxKind.ReadonlyKeyword && isTypeOperatorNode(parent) && parent.operator === SyntaxKind.ReadonlyKeyword &&
        isArrayTypeNode(parent.type) && isTypeReferenceNode(parent.type.elementType)
    ) {
        return parent.type.elementType.typeName;
    }
    if (!forRename) {
        // /**/new [|name|]
        // /**/void [|name|]
        // /**/void obj.[|name|]
        // /**/typeof [|name|]
        // /**/typeof obj.[|name|]
        // /**/await [|name|]
        // /**/await obj.[|name|]
        // /**/yield [|name|]
        // /**/yield obj.[|name|]
        // /**/delete obj.[|name|]
        if (
            node.kind === SyntaxKind.NewKeyword && isNewExpression(parent) ||
            node.kind === SyntaxKind.VoidKeyword && isVoidExpression(parent) ||
            node.kind === SyntaxKind.TypeOfKeyword && isTypeOfExpression(parent) ||
            node.kind === SyntaxKind.AwaitKeyword && isAwaitExpression(parent) ||
            node.kind === SyntaxKind.YieldKeyword && isYieldExpression(parent) ||
            node.kind === SyntaxKind.DeleteKeyword && isDeleteExpression(parent)
        ) {
            if (parent.expression) {
                return skipOuterExpressions(parent.expression);
            }
        }
        // left /**/in [|name|]
        // left /**/instanceof [|name|]
        if ((node.kind === SyntaxKind.InKeyword || node.kind === SyntaxKind.InstanceOfKeyword) && isBinaryExpression(parent) && parent.operatorToken === node) {
            return skipOuterExpressions(parent.right);
        }
        // left /**/as [|name|]
        if (node.kind === SyntaxKind.AsKeyword && isAsExpression(parent) && isTypeReferenceNode(parent.type)) {
            return parent.type.typeName;
        }
        // for (... /**/in [|name|])
        // for (... /**/of [|name|])
        if (
            node.kind === SyntaxKind.InKeyword && isForInStatement(parent) ||
            node.kind === SyntaxKind.OfKeyword && isForOfStatement(parent)
        ) {
            return skipOuterExpressions(parent.expression);
        }
    }
    return node;
}

/**
 * Adjusts the location used for "find references" and "go to definition" when the cursor was not
 * on a property name.
 *
 * @param node The node to adjust the location for.
 * @internal
 */
export function getAdjustedReferenceLocation(node: Node): Node {
    return getAdjustedLocation(node, /*forRename*/ false);
}

/**
 * Adjusts the location used for "rename" when the cursor was not on a property name.
 *
 * @param node The node for which the rename location is being adjusted.
 * @internal
 */
export function getAdjustedRenameLocation(node: Node): Node {
    return getAdjustedLocation(node, /*forRename*/ true);
}

/**
 * Gets the token whose text has range [start, end) and
 * position >= start and (position < end or (position === end && token is a property name literal, keyword, or private identifier)).
 *
 * @param sourceFile The source file to search within.
 * @param position The position to find the token at.
 * @internal
 */
export function getTouchingPropertyName(sourceFile: SourceFile, position: number): Node {
    return getTouchingToken(sourceFile, position, n => isPropertyNameLiteral(n) || isKeyword(n.kind) || isPrivateIdentifier(n));
}

/**
 * Returns the token if position is in [start, end).
 * If position === end, returns the preceding token if includePrecedingTokenAtEndPosition(previousToken) === true.
 *
 * @param sourceFile The source file to search within.
 * @param position The position to find the token at.
 * @param includePrecedingTokenAtEndPosition Optional callback to determine if the preceding token should be included when position === end.
 *
 * @internal
 */
export function getTouchingToken(sourceFile: SourceFile, position: number, includePrecedingTokenAtEndPosition?: (n: Node) => boolean): Node {
    return getTokenAtPositionWorker(sourceFile, position, /*allowPositionInLeadingTrivia*/ false, includePrecedingTokenAtEndPosition, /*includeEndPosition*/ false);
}

/**
 * Returns a token if position is in [start-of-leading-trivia, end)
 *
 * @param sourceFile The source file to search within.
 * @param position The position to find the token at.
 * @internal
 */
export function getTokenAtPosition(sourceFile: SourceFile, position: number): Node {
    return getTokenAtPositionWorker(sourceFile, position, /*allowPositionInLeadingTrivia*/ true, /*includePrecedingTokenAtEndPosition*/ undefined, /*includeEndPosition*/ false);
}

/** Get the token whose text contains the position */
function getTokenAtPositionWorker(sourceFile: SourceFile, position: number, allowPositionInLeadingTrivia: boolean, includePrecedingTokenAtEndPosition: ((n: Node) => boolean) | undefined, includeEndPosition: boolean): Node {
    let current: Node = sourceFile;
    let foundToken: Node | undefined;
    outer:
    while (true) {
        // find the child that contains 'position'

        const children = current.getChildren(sourceFile);
        const i = binarySearchKey(children, position, (_, i) => i, (middle, _) => {
            // This last callback is more of a selector than a comparator -
            // `EqualTo` causes the `middle` result to be returned
            // `GreaterThan` causes recursion on the left of the middle
            // `LessThan` causes recursion on the right of the middle

            // Let's say you have 3 nodes, spanning positons
            // pos: 1, end: 3
            // pos: 3, end: 3
            // pos: 3, end: 5
            // and you're looking for the token at positon 3 - all 3 of these nodes are overlapping with position 3.
            // In fact, there's a _good argument_ that node 2 shouldn't even be allowed to exist - depending on if
            // the start or end of the ranges are considered inclusive, it's either wholly subsumed by the first or the last node.
            // Unfortunately, such nodes do exist. :( - See fourslash/completionsImport_tsx.tsx - empty jsx attributes create
            // a zero-length node.
            // What also you may not expect is that which node we return depends on the includePrecedingTokenAtEndPosition flag.
            // Specifically, if includePrecedingTokenAtEndPosition is set, we return the 1-3 node, while if it's unset, we
            // return the 3-5 node. (The zero length node is never correct.) This is because the includePrecedingTokenAtEndPosition
            // flag causes us to return the first node whose end position matches the position and which produces and acceptable token
            // kind. Meanwhile, if includePrecedingTokenAtEndPosition is unset, we look for the first node whose start is <= the
            // position and whose end is greater than the position.

            // There are more sophisticated end tests later, but this one is very fast
            // and allows us to skip a bunch of work
            const end = children[middle].getEnd();
            if (end < position) {
                return Comparison.LessThan;
            }

            const start = allowPositionInLeadingTrivia ? children[middle].getFullStart() : children[middle].getStart(sourceFile, /*includeJsDocComment*/ true);
            if (start > position) {
                return Comparison.GreaterThan;
            }

            // first element whose start position is before the input and whose end position is after or equal to the input
            if (nodeContainsPosition(children[middle], start, end)) {
                if (children[middle - 1]) {
                    // we want the _first_ element that contains the position, so left-recur if the prior node also contains the position
                    if (nodeContainsPosition(children[middle - 1])) {
                        return Comparison.GreaterThan;
                    }
                }
                return Comparison.EqualTo;
            }

            // this complex condition makes us left-recur around a zero-length node when includePrecedingTokenAtEndPosition is set, rather than right-recur on it
            if (includePrecedingTokenAtEndPosition && start === position && children[middle - 1] && children[middle - 1].getEnd() === position && nodeContainsPosition(children[middle - 1])) {
                return Comparison.GreaterThan;
            }
            return Comparison.LessThan;
        });

        if (foundToken) {
            return foundToken;
        }
        if (i >= 0 && children[i]) {
            current = children[i];
            continue outer;
        }

        return current;
    }

    function nodeContainsPosition(node: Node, start?: number, end?: number) {
        end ??= node.getEnd();
        if (end < position) {
            return false;
        }
        start ??= allowPositionInLeadingTrivia ? node.getFullStart() : node.getStart(sourceFile, /*includeJsDocComment*/ true);
        if (start > position) {
            // If this child begins after position, then all subsequent children will as well.
            return false;
        }
        if (position < end || (position === end && (node.kind === SyntaxKind.EndOfFileToken || includeEndPosition))) {
            return true;
        }
        else if (includePrecedingTokenAtEndPosition && end === position) {
            const previousToken = findPrecedingToken(position, sourceFile, node);
            if (previousToken && includePrecedingTokenAtEndPosition(previousToken)) {
                foundToken = previousToken;
                return true;
            }
        }
        return false;
    }
}

/**
 * Returns the first token where position is in [start, end),
 * excluding `JsxText` tokens containing only whitespace.
 *
 * @param sourceFile The source file to search within.
 * @param position The position to start the search from.
 * @internal
 */
export function findFirstNonJsxWhitespaceToken(sourceFile: SourceFile, position: number): Node | undefined {
    let tokenAtPosition = getTokenAtPosition(sourceFile, position);
    while (isWhiteSpaceOnlyJsxText(tokenAtPosition)) {
        const nextToken = findNextToken(tokenAtPosition, tokenAtPosition.parent, sourceFile);
        if (!nextToken) return;
        tokenAtPosition = nextToken;
    }
    return tokenAtPosition;
}

/**
 * Finds the token on the left of the specified position in the source file.
 * The token is either the one that strictly includes the position or the one
 * immediately preceding the position if it is on a boundary. For example:
 *
 *   fo|o               -> will return foo
 *   foo <comment> |bar -> will return foo
 *
 * @param file The source file to search within.
 * @param position The position to find the token to the left of.
 * @internal
 */
export function findTokenOnLeftOfPosition(file: SourceFile, position: number): Node | undefined {
    // Ideally, getTokenAtPosition should return a token. However, it is currently
    // broken, so we do a check to make sure the result was indeed a token.
    const tokenAtPosition = getTokenAtPosition(file, position);
    if (isToken(tokenAtPosition) && position > tokenAtPosition.getStart(file) && position < tokenAtPosition.getEnd()) {
        return tokenAtPosition;
    }

    return findPrecedingToken(position, file);
}

/** 
 * @internal 
 * Finds the next token in the syntax tree after the given token within the specified parent node and source file.
 * @param previousToken The token to find the next token after.
 * @param parent The parent node to search within.
 * @param sourceFile The source file containing the nodes.
 */
export function findNextToken(previousToken: Node, parent: Node, sourceFile: SourceFileLike): Node | undefined {
    return find(parent);

    function find(n: Node): Node | undefined {
        if (isToken(n) && n.pos === previousToken.end) {
            // this is token that starts at the end of previous token - return it
            return n;
        }
        return firstDefined(n.getChildren(sourceFile), child => {
            const shouldDiveInChildNode =
                // previous token is enclosed somewhere in the child
                (child.pos <= previousToken.pos && child.end > previousToken.end) ||
                // previous token ends exactly at the beginning of child
                (child.pos === previousToken.end);
            return shouldDiveInChildNode && nodeHasTokens(child, sourceFile) ? find(child) : undefined;
        });
    }
}

/**
 * Finds the rightmost token satisfying `token.end <= position`,
 * excluding `JsxText` tokens containing only whitespace.
 *
 * @internal
 */
export function findPrecedingToken(position: number, sourceFile: SourceFileLike, startNode: Node, excludeJsdoc?: boolean): Node | undefined;
/** @internal */
export function findPrecedingToken(position: number, sourceFile: SourceFile, startNode?: Node, excludeJsdoc?: boolean): Node | undefined;
/** 
 * @internal
 * Finds the preceding token at the specified position in the source file.
 * 
 * @param position The position to search for the preceding token.
 * @param sourceFile The source file to search within.
 * @param startNode Optional node to start the search from.
 * @param excludeJsdoc Whether to exclude JSDoc comments from the search.
 * @returns The preceding token node, or undefined if none is found.
 */
export function findPrecedingToken(position: number, sourceFile: SourceFileLike, startNode?: Node, excludeJsdoc?: boolean): Node | undefined {
    const result = find((startNode || sourceFile) as Node);
    Debug.assert(!(result && isWhiteSpaceOnlyJsxText(result)));
    return result;

    function find(n: Node): Node | undefined {
        if (isNonWhitespaceToken(n) && n.kind !== SyntaxKind.EndOfFileToken) {
            return n;
        }

        const children = n.getChildren(sourceFile);
        const i = binarySearchKey(children, position, (_, i) => i, (middle, _) => {
            // This last callback is more of a selector than a comparator -
            // `EqualTo` causes the `middle` result to be returned
            // `GreaterThan` causes recursion on the left of the middle
            // `LessThan` causes recursion on the right of the middle
            if (position < children[middle].end) {
                // first element whose end position is greater than the input position
                if (!children[middle - 1] || position >= children[middle - 1].end) {
                    return Comparison.EqualTo;
                }
                return Comparison.GreaterThan;
            }
            return Comparison.LessThan;
        });
        if (i >= 0 && children[i]) {
            const child = children[i];
            // Note that the span of a node's tokens is [node.getStart(...), node.end).
            // Given that `position < child.end` and child has constituent tokens, we distinguish these cases:
            // 1) `position` precedes `child`'s tokens or `child` has no tokens (ie: in a comment or whitespace preceding `child`):
            // we need to find the last token in a previous child.
            // 2) `position` is within the same span: we recurse on `child`.
            if (position < child.end) {
                const start = child.getStart(sourceFile, /*includeJsDoc*/ !excludeJsdoc);
                const lookInPreviousChild = (start >= position) || // cursor in the leading trivia
                    !nodeHasTokens(child, sourceFile) ||
                    isWhiteSpaceOnlyJsxText(child);

                if (lookInPreviousChild) {
                    // actual start of the node is past the position - previous token should be at the end of previous child
                    const candidate = findRightmostChildNodeWithTokens(children, /*exclusiveStartPosition*/ i, sourceFile, n.kind);
                    if (candidate) {
                        // Ensure we recurse into JSDoc nodes with children.
                        if (!excludeJsdoc && isJSDocCommentContainingNode(candidate) && candidate.getChildren(sourceFile).length) {
                            return find(candidate);
                        }
                        return findRightmostToken(candidate, sourceFile);
                    }
                    return undefined;
                }
                else {
                    // candidate should be in this node
                    return find(child);
                }
            }
        }

        Debug.assert(startNode !== undefined || n.kind === SyntaxKind.SourceFile || n.kind === SyntaxKind.EndOfFileToken || isJSDocCommentContainingNode(n));

        // Here we know that none of child token nodes embrace the position,
        // the only known case is when position is at the end of the file.
        // Try to find the rightmost token in the file without filtering.
        // Namely we are skipping the check: 'position < node.end'
        const candidate = findRightmostChildNodeWithTokens(children, /*exclusiveStartPosition*/ children.length, sourceFile, n.kind);
        return candidate && findRightmostToken(candidate, sourceFile);
    }
}

function isNonWhitespaceToken(n: Node): boolean {
    return isToken(n) && !isWhiteSpaceOnlyJsxText(n);
}

function findRightmostToken(n: Node, sourceFile: SourceFileLike): Node | undefined {
    if (isNonWhitespaceToken(n)) {
        return n;
    }

    const children = n.getChildren(sourceFile);
    if (children.length === 0) {
        return n;
    }

    const candidate = findRightmostChildNodeWithTokens(children, /*exclusiveStartPosition*/ children.length, sourceFile, n.kind);
    return candidate && findRightmostToken(candidate, sourceFile);
}

/**
 * Finds the rightmost child to the left of `children[exclusiveStartPosition]` which is a non-all-whitespace token or has constituent tokens.
 */
function findRightmostChildNodeWithTokens(children: readonly Node[], exclusiveStartPosition: number, sourceFile: SourceFileLike, parentKind: SyntaxKind): Node | undefined {
    for (let i = exclusiveStartPosition - 1; i >= 0; i--) {
        const child = children[i];

        if (isWhiteSpaceOnlyJsxText(child)) {
            if (i === 0 && (parentKind === SyntaxKind.JsxText || parentKind === SyntaxKind.JsxSelfClosingElement)) {
                Debug.fail("`JsxText` tokens should not be the first child of `JsxElement | JsxSelfClosingElement`");
            }
        }
        else if (nodeHasTokens(children[i], sourceFile)) {
            return children[i];
        }
    }
}

/** 
 * @internal
 * Determines if a given position in a source file is within a string literal or similar text-containing node.
 * 
 * @param sourceFile The source file to check.
 * @param position The position in the source file to check.
 * @param previousToken The token preceding the position, if already known. Defaults to finding the preceding token.
 */
export function isInString(sourceFile: SourceFile, position: number, previousToken: Node | undefined = findPrecedingToken(position, sourceFile)): boolean {
    if (previousToken && isStringTextContainingNode(previousToken)) {
        const start = previousToken.getStart(sourceFile);
        const end = previousToken.getEnd();

        // To be "in" one of these literals, the position has to be:
        //   1. entirely within the token text.
        //   2. at the end position of an unterminated token.
        //   3. at the end of a regular expression (due to trailing flags like '/foo/g').
        if (start < position && position < end) {
            return true;
        }

        if (position === end) {
            return !!(previousToken as LiteralExpression).isUnterminated;
        }
    }

    return false;
}

/**
 * @internal
 * Determines if a given position in a source file is inside a JSX element or attribute.
 * 
 * @param sourceFile The source file to check.
 * @param position The position within the source file to evaluate.
 */
export function isInsideJsxElementOrAttribute(sourceFile: SourceFile, position: number): boolean {
    const token = getTokenAtPosition(sourceFile, position);

    if (!token) {
        return false;
    }

    if (token.kind === SyntaxKind.JsxText) {
        return true;
    }

    // <div>Hello |</div>
    if (token.kind === SyntaxKind.LessThanToken && token.parent.kind === SyntaxKind.JsxText) {
        return true;
    }

    // <div> { | </div> or <div a={| </div>
    if (token.kind === SyntaxKind.LessThanToken && token.parent.kind === SyntaxKind.JsxExpression) {
        return true;
    }

    // <div> {
    // |
    // } < /div>
    if (token && token.kind === SyntaxKind.CloseBraceToken && token.parent.kind === SyntaxKind.JsxExpression) {
        return true;
    }

    // <div>|</div>
    if (token.kind === SyntaxKind.LessThanToken && token.parent.kind === SyntaxKind.JsxClosingElement) {
        return true;
    }

    return false;
}

function isWhiteSpaceOnlyJsxText(node: Node): boolean {
    return isJsxText(node) && node.containsOnlyTriviaWhiteSpaces;
}

/** 
 * @internal 
 * Determines if a given position is within a template string in the provided source file.
 * @param sourceFile The source file to check.
 * @param position The position within the source file to check.
 */
export function isInTemplateString(sourceFile: SourceFile, position: number): boolean {
    const token = getTokenAtPosition(sourceFile, position);
    return isTemplateLiteralKind(token.kind) && position > token.getStart(sourceFile);
}

/** 
 * @internal
 * Determines if a given position in a source file is within JSX text.
 * @param sourceFile The source file to check.
 * @param position The position within the source file to check.
 */
export function isInJSXText(sourceFile: SourceFile, position: number): boolean {
    const token = getTokenAtPosition(sourceFile, position);
    if (isJsxText(token)) {
        return true;
    }
    if (token.kind === SyntaxKind.OpenBraceToken && isJsxExpression(token.parent) && isJsxElement(token.parent.parent)) {
        return true;
    }
    if (token.kind === SyntaxKind.LessThanToken && isJsxOpeningLikeElement(token.parent) && isJsxElement(token.parent.parent)) {
        return true;
    }
    return false;
}

/** 
 * @internal
 * Determines if a given position in a source file is inside a JSX element.
 * @param sourceFile The source file to check.
 * @param position The position in the source file to check.
 */
export function isInsideJsxElement(sourceFile: SourceFile, position: number): boolean {
    function isInsideJsxElementTraversal(node: Node): boolean {
        while (node) {
            if (
                node.kind >= SyntaxKind.JsxSelfClosingElement && node.kind <= SyntaxKind.JsxExpression
                || node.kind === SyntaxKind.JsxText
                || node.kind === SyntaxKind.LessThanToken
                || node.kind === SyntaxKind.GreaterThanToken
                || node.kind === SyntaxKind.Identifier
                || node.kind === SyntaxKind.CloseBraceToken
                || node.kind === SyntaxKind.OpenBraceToken
                || node.kind === SyntaxKind.SlashToken
            ) {
                node = node.parent;
            }
            else if (node.kind === SyntaxKind.JsxElement) {
                if (position > node.getStart(sourceFile)) return true;

                node = node.parent;
            }
            else {
                return false;
            }
        }

        return false;
    }

    return isInsideJsxElementTraversal(getTokenAtPosition(sourceFile, position));
}

/** 
 * @internal
 * Finds the preceding matching token for a given token in the source file.
 * 
 * @param token The token for which to find the preceding matching token.
 * @param matchingTokenKind The kind of the matching token to find.
 * @param sourceFile The source file in which to search for the matching token.
 * @returns The preceding matching token if found, otherwise undefined.
 */
export function findPrecedingMatchingToken(token: Node, matchingTokenKind: SyntaxKind.OpenBraceToken | SyntaxKind.OpenParenToken | SyntaxKind.OpenBracketToken, sourceFile: SourceFile): Node | undefined {
    const closeTokenText = tokenToString(token.kind)!;
    const matchingTokenText = tokenToString(matchingTokenKind);
    const tokenFullStart = token.getFullStart();
    // Text-scan based fast path - can be bamboozled by comments and other trivia, but often provides
    // a good, fast approximation without too much extra work in the cases where it fails.
    const bestGuessIndex = sourceFile.text.lastIndexOf(matchingTokenText, tokenFullStart);
    if (bestGuessIndex === -1) {
        return undefined; // if the token text doesn't appear in the file, there can't be a match - super fast bail
    }
    // we can only use the textual result directly if we didn't have to count any close tokens within the range
    if (sourceFile.text.lastIndexOf(closeTokenText, tokenFullStart - 1) < bestGuessIndex) {
        const nodeAtGuess = findPrecedingToken(bestGuessIndex + 1, sourceFile);
        if (nodeAtGuess && nodeAtGuess.kind === matchingTokenKind) {
            return nodeAtGuess;
        }
    }
    const tokenKind = token.kind;
    let remainingMatchingTokens = 0;
    while (true) {
        const preceding = findPrecedingToken(token.getFullStart(), sourceFile);
        if (!preceding) {
            return undefined;
        }
        token = preceding;

        if (token.kind === matchingTokenKind) {
            if (remainingMatchingTokens === 0) {
                return token;
            }

            remainingMatchingTokens--;
        }
        else if (token.kind === tokenKind) {
            remainingMatchingTokens++;
        }
    }
}

function removeOptionality(type: Type, isOptionalExpression: boolean, isOptionalChain: boolean) {
    return isOptionalExpression ? type.getNonNullableType() :
        isOptionalChain ? type.getNonOptionalType() :
        type;
}

/** 
 * @internal 
 * Determines if the given token is possibly in a position where a type argument could be provided.
 * @param token The token to check.
 * @param sourceFile The source file containing the token.
 * @param checker The type checker to use for analysis.
 */
export function isPossiblyTypeArgumentPosition(token: Node, sourceFile: SourceFile, checker: TypeChecker): boolean {
    const info = getPossibleTypeArgumentsInfo(token, sourceFile);
    return info !== undefined && (isPartOfTypeNode(info.called) ||
        getPossibleGenericSignatures(info.called, info.nTypeArguments, checker).length !== 0 ||
        isPossiblyTypeArgumentPosition(info.called, sourceFile, checker));
}

/** 
 * @internal
 * Retrieves possible generic signatures for a given expression based on the number of type arguments.
 * @param called The expression being called.
 * @param typeArgumentCount The number of type arguments provided.
 * @param checker The type checker instance.
 * @returns An array of signatures that match the criteria.
 */
export function getPossibleGenericSignatures(called: Expression, typeArgumentCount: number, checker: TypeChecker): readonly Signature[] {
    let type = checker.getTypeAtLocation(called);
    if (isOptionalChain(called.parent)) {
        type = removeOptionality(type, isOptionalChainRoot(called.parent), /*isOptionalChain*/ true);
    }

    const signatures = isNewExpression(called.parent) ? type.getConstructSignatures() : type.getCallSignatures();
    return signatures.filter(candidate => !!candidate.typeParameters && candidate.typeParameters.length >= typeArgumentCount);
}

/** @internal */
export interface PossibleTypeArgumentInfo {
    readonly called: Identifier;
    readonly nTypeArguments: number;
}

/** @internal */
export interface PossibleProgramFileInfo {
    ProgramFiles?: string[];
}

// Get info for an expression like `f <` that may be the start of type arguments.
/** 
 * @internal
 * Determines if the given token could be in a type argument position.
 * Scans the preceding tokens to identify if the current position is within a type argument list.
 * Balances out already provided type arguments, arrays, and object literals during the scan.
 * Returns information about the possible type arguments if found.
 * 
 * @param tokenIn - The starting token to analyze.
 * @param sourceFile - The source file containing the token.
 */
export function getPossibleTypeArgumentsInfo(tokenIn: Node | undefined, sourceFile: SourceFile): PossibleTypeArgumentInfo | undefined {
    // This is a rare case, but one that saves on a _lot_ of work if true - if the source file has _no_ `<` character,
    // then there obviously can't be any type arguments - no expensive brace-matching backwards scanning required

    if (sourceFile.text.lastIndexOf("<", tokenIn ? tokenIn.pos : sourceFile.text.length) === -1) {
        return undefined;
    }

    let token: Node | undefined = tokenIn;
    // This function determines if the node could be type argument position
    // Since during editing, when type argument list is not complete,
    // the tree could be of any shape depending on the tokens parsed before current node,
    // scanning of the previous identifier followed by "<" before current node would give us better result
    // Note that we also balance out the already provided type arguments, arrays, object literals while doing so
    let remainingLessThanTokens = 0;
    let nTypeArguments = 0;
    while (token) {
        switch (token.kind) {
            case SyntaxKind.LessThanToken:
                // Found the beginning of the generic argument expression
                token = findPrecedingToken(token.getFullStart(), sourceFile);
                if (token && token.kind === SyntaxKind.QuestionDotToken) {
                    token = findPrecedingToken(token.getFullStart(), sourceFile);
                }
                if (!token || !isIdentifier(token)) return undefined;
                if (!remainingLessThanTokens) {
                    return isDeclarationName(token) ? undefined : { called: token, nTypeArguments };
                }
                remainingLessThanTokens--;
                break;

            case SyntaxKind.GreaterThanGreaterThanGreaterThanToken:
                remainingLessThanTokens = +3;
                break;

            case SyntaxKind.GreaterThanGreaterThanToken:
                remainingLessThanTokens = +2;
                break;

            case SyntaxKind.GreaterThanToken:
                remainingLessThanTokens++;
                break;

            case SyntaxKind.CloseBraceToken:
                // This can be object type, skip until we find the matching open brace token
                // Skip until the matching open brace token
                token = findPrecedingMatchingToken(token, SyntaxKind.OpenBraceToken, sourceFile);
                if (!token) return undefined;
                break;

            case SyntaxKind.CloseParenToken:
                // This can be object type, skip until we find the matching open brace token
                // Skip until the matching open brace token
                token = findPrecedingMatchingToken(token, SyntaxKind.OpenParenToken, sourceFile);
                if (!token) return undefined;
                break;

            case SyntaxKind.CloseBracketToken:
                // This can be object type, skip until we find the matching open brace token
                // Skip until the matching open brace token
                token = findPrecedingMatchingToken(token, SyntaxKind.OpenBracketToken, sourceFile);
                if (!token) return undefined;
                break;

            // Valid tokens in a type name. Skip.
            case SyntaxKind.CommaToken:
                nTypeArguments++;
                break;

            case SyntaxKind.EqualsGreaterThanToken:
            // falls through
            case SyntaxKind.Identifier:
            case SyntaxKind.StringLiteral:
            case SyntaxKind.NumericLiteral:
            case SyntaxKind.BigIntLiteral:
            case SyntaxKind.TrueKeyword:
            case SyntaxKind.FalseKeyword:
            // falls through
            case SyntaxKind.TypeOfKeyword:
            case SyntaxKind.ExtendsKeyword:
            case SyntaxKind.KeyOfKeyword:
            case SyntaxKind.DotToken:
            case SyntaxKind.BarToken:
            case SyntaxKind.QuestionToken:
            case SyntaxKind.ColonToken:
                break;

            default:
                if (isTypeNode(token)) {
                    break;
                }

                // Invalid token in type
                return undefined;
        }

        token = findPrecedingToken(token.getFullStart(), sourceFile);
    }

    return undefined;
}

/**
 * Returns the range of the comment if the cursor at the given position in the sourceFile is within a comment, otherwise undefined.
 *
 * @param sourceFile The source file to check.
 * @param position The position in the source file to check.
 * @param tokenAtPosition Optional. The token at the given position, typically obtained using `getTokenAtPosition`.
 *
 * @internal
 */
export function isInComment(sourceFile: SourceFile, position: number, tokenAtPosition?: Node): CommentRange | undefined {
    return formatting.getRangeOfEnclosingComment(sourceFile, position, /*precedingToken*/ undefined, tokenAtPosition);
}

/** 
 * @internal 
 * Determines if a given position in a source file has a JSDoc comment.
 * @param sourceFile The source file to check.
 * @param position The position in the source file to check.
 */
export function hasDocComment(sourceFile: SourceFile, position: number): boolean {
    const token = getTokenAtPosition(sourceFile, position);
    return !!findAncestor(token, isJSDoc);
}

function nodeHasTokens(n: Node, sourceFile: SourceFileLike): boolean {
    // If we have a token or node that has a non-zero width, it must have tokens.
    // Note: getWidth() does not take trivia into account.
    return n.kind === SyntaxKind.EndOfFileToken ? !!(n as EndOfFileToken).jsDoc : n.getWidth(sourceFile) !== 0;
}

/** 
 * @internal 
 * Retrieves the modifiers of a given node as a comma-separated string.
 * @param node The node for which to retrieve modifiers.
 * @param excludeFlags Flags to exclude specific modifiers from the result.
 * @returns A comma-separated string of modifiers or 'none' if no modifiers are present.
 */
export function getNodeModifiers(node: Node, excludeFlags: ModifierFlags = ModifierFlags.None): string {
    const result: string[] = [];
    const flags = isDeclaration(node)
        ? getCombinedNodeFlagsAlwaysIncludeJSDoc(node) & ~excludeFlags
        : ModifierFlags.None;

    if (flags & ModifierFlags.Private) result.push(ScriptElementKindModifier.privateMemberModifier);
    if (flags & ModifierFlags.Protected) result.push(ScriptElementKindModifier.protectedMemberModifier);
    if (flags & ModifierFlags.Public) result.push(ScriptElementKindModifier.publicMemberModifier);
    if (flags & ModifierFlags.Static || isClassStaticBlockDeclaration(node)) result.push(ScriptElementKindModifier.staticModifier);
    if (flags & ModifierFlags.Abstract) result.push(ScriptElementKindModifier.abstractModifier);
    if (flags & ModifierFlags.Export) result.push(ScriptElementKindModifier.exportedModifier);
    if (flags & ModifierFlags.Deprecated) result.push(ScriptElementKindModifier.deprecatedModifier);
    if (node.flags & NodeFlags.Ambient) result.push(ScriptElementKindModifier.ambientModifier);
    if (node.kind === SyntaxKind.ExportAssignment) result.push(ScriptElementKindModifier.exportedModifier);

    return result.length > 0 ? result.join(",") : ScriptElementKindModifier.none;
}

/** 
 * @internal
 * Retrieves the list of type arguments or type parameters for a given node.
 * Returns the type arguments if the node is a TypeReference or CallExpression.
 * Returns the type parameters if the node is a function-like declaration, ClassDeclaration, or InterfaceDeclaration.
 * Returns undefined if none of these conditions are met.
 */
export function getTypeArgumentOrTypeParameterList(node: Node): NodeArray<Node> | undefined {
    if (node.kind === SyntaxKind.TypeReference || node.kind === SyntaxKind.CallExpression) {
        return (node as CallExpression).typeArguments;
    }

    if (isFunctionLike(node) || node.kind === SyntaxKind.ClassDeclaration || node.kind === SyntaxKind.InterfaceDeclaration) {
        return (node as FunctionLikeDeclaration).typeParameters;
    }

    return undefined;
}

/** 
 * @internal 
 * Determines if the given syntax kind represents a comment.
 * @param kind The syntax kind to check.
 * @returns True if the syntax kind is a single-line or multi-line comment, otherwise false.
 */
export function isComment(kind: SyntaxKind): boolean {
    return kind === SyntaxKind.SingleLineCommentTrivia || kind === SyntaxKind.MultiLineCommentTrivia;
}

/** 
 * @internal 
 * Determines if the given kind represents a string literal, regular expression literal, or template literal.
 * @param kind The syntax kind to check.
 */
export function isStringOrRegularExpressionOrTemplateLiteral(kind: SyntaxKind): boolean {
    if (
        kind === SyntaxKind.StringLiteral
        || kind === SyntaxKind.RegularExpressionLiteral
        || isTemplateLiteralKind(kind)
    ) {
        return true;
    }
    return false;
}

function areIntersectedTypesAvoidingStringReduction(checker: TypeChecker, t1: Type, t2: Type) {
    return !!(t1.flags & TypeFlags.String) && checker.isEmptyAnonymousObjectType(t2);
}

/** 
 * @internal 
 * Determines if the given type is an intersection of a string and an empty anonymous object.
 * @param type - The type to check.
 */
export function isStringAndEmptyAnonymousObjectIntersection(type: Type): boolean {
    if (!type.isIntersection()) {
        return false;
    }

    const { types, checker } = type;
    return types.length === 2 &&
        (areIntersectedTypesAvoidingStringReduction(checker, types[0], types[1]) || areIntersectedTypesAvoidingStringReduction(checker, types[1], types[0]));
}

/** 
 * @internal 
 * Determines if a position is inside a template literal.
 * @param node The template literal token to check.
 * @param position The position to test.
 * @param sourceFile The source file containing the template literal.
 */
export function isInsideTemplateLiteral(node: TemplateLiteralToken, position: number, sourceFile: SourceFile): boolean {
    return isTemplateLiteralKind(node.kind)
            && (node.getStart(sourceFile) < position && position < node.end) || (!!node.isUnterminated && position === node.end);
}

/**
 * Determines if the given syntax kind is an accessibility modifier.
 * @param kind The syntax kind to check.
 */
export function isAccessibilityModifier(kind: SyntaxKind): boolean {
    switch (kind) {
        case SyntaxKind.PublicKeyword:
        case SyntaxKind.PrivateKeyword:
        case SyntaxKind.ProtectedKeyword:
            return true;
    }

    return false;
}

/** 
 * @internal 
 * Clones the given compiler options and sets the config file in the cloned options.
 * @param options The compiler options to clone.
 */
export function cloneCompilerOptions(options: CompilerOptions): CompilerOptions {
    const result = clone(options);
    setConfigFileInOptions(result, options && options.configFile);
    return result;
}

/** 
 * @internal 
 * Determines if a node is an array literal or object literal destructuring pattern.
 * 
 * @param node The node to check.
 */
export function isArrayLiteralOrObjectLiteralDestructuringPattern(node: Node): boolean {
    if (
        node.kind === SyntaxKind.ArrayLiteralExpression ||
        node.kind === SyntaxKind.ObjectLiteralExpression
    ) {
        // [a,b,c] from:
        // [a, b, c] = someExpression;
        if (
            node.parent.kind === SyntaxKind.BinaryExpression &&
            (node.parent as BinaryExpression).left === node &&
            (node.parent as BinaryExpression).operatorToken.kind === SyntaxKind.EqualsToken
        ) {
            return true;
        }

        // [a, b, c] from:
        // for([a, b, c] of expression)
        if (
            node.parent.kind === SyntaxKind.ForOfStatement &&
            (node.parent as ForOfStatement).initializer === node
        ) {
            return true;
        }

        // [a, b, c] of
        // [x, [a, b, c] ] = someExpression
        // or
        // {x, a: {a, b, c} } = someExpression
        if (isArrayLiteralOrObjectLiteralDestructuringPattern(node.parent.kind === SyntaxKind.PropertyAssignment ? node.parent.parent : node.parent)) {
            return true;
        }
    }

    return false;
}

/** 
 * @internal 
 * Determines if a given position in a source file is within a reference comment.
 * @param sourceFile The source file to check.
 * @param position The position within the source file to check.
 */
export function isInReferenceComment(sourceFile: SourceFile, position: number): boolean {
    return isInReferenceCommentWorker(sourceFile, position, /*shouldBeReference*/ true);
}

/**
 * @internal
 * Determines if the specified position in the source file is within a non-reference comment.
 * @param sourceFile The source file to check.
 * @param position The position in the source file to check.
 */
export function isInNonReferenceComment(sourceFile: SourceFile, position: number): boolean {
    return isInReferenceCommentWorker(sourceFile, position, /*shouldBeReference*/ false);
}

function isInReferenceCommentWorker(sourceFile: SourceFile, position: number, shouldBeReference: boolean): boolean {
    const range = isInComment(sourceFile, position, /*tokenAtPosition*/ undefined);
    return !!range && shouldBeReference === tripleSlashDirectivePrefixRegex.test(sourceFile.text.substring(range.pos, range.end));
}

/** 
 * @internal 
 * Gets the replacement span for the given context token at the specified position.
 * @param contextToken The token to get the replacement span for.
 * @param position The position within the token to consider.
 */
export function getReplacementSpanForContextToken(contextToken: Node | undefined, position: number): TextSpan | undefined {
    if (!contextToken) return undefined;

    switch (contextToken.kind) {
        case SyntaxKind.StringLiteral:
        case SyntaxKind.NoSubstitutionTemplateLiteral:
            return createTextSpanFromStringLiteralLikeContent(contextToken as StringLiteralLike, position);
        default:
            return createTextSpanFromNode(contextToken);
    }
}

/** 
 * @internal 
 * Creates a text span from a node. 
 * @param node The node to create the text span from. 
 * @param sourceFile Optional source file to provide context for the node. 
 * @param endNode Optional end node to determine the span's end position. 
 */
export function createTextSpanFromNode(node: Node, sourceFile?: SourceFile, endNode?: Node): TextSpan {
    return createTextSpanFromBounds(node.getStart(sourceFile), (endNode || node).getEnd());
}

/** 
 * @internal 
 * Creates a text span from the content of a string literal-like node.
 * Returns undefined if the string is unterminated and empty.
 * @param node The string literal-like node.
 * @param position The position to consider for truncation in case of an unterminated string.
 */
export function createTextSpanFromStringLiteralLikeContent(node: StringLiteralLike, position: number): TextSpan | undefined {
    let replacementEnd = node.getEnd() - 1;
    if (node.isUnterminated) {
        // we return no replacement range only if unterminated string is empty
        if (node.getStart() === replacementEnd) return undefined;
        replacementEnd = Math.min(position, node.getEnd());
    }
    return createTextSpanFromBounds(node.getStart() + 1, replacementEnd);
}

/** 
 * @internal 
 * Creates a text range from the given node within the specified source file.
 * @param node The node to create the text range from.
 * @param sourceFile The source file containing the node.
 */
export function createTextRangeFromNode(node: Node, sourceFile: SourceFile): TextRange {
    return createRange(node.getStart(sourceFile), node.end);
}

/** 
 * @internal 
 * Creates a TextSpan from a given range.
 * @param range The range to convert into a TextSpan.
 */
export function createTextSpanFromRange(range: TextRange): TextSpan {
    return createTextSpanFromBounds(range.pos, range.end);
}

/** 
 * @internal 
 * Creates a text range from a given text span.
 * @param span The text span to convert into a text range.
 */
export function createTextRangeFromSpan(span: TextSpan): TextRange {
    return createRange(span.start, span.start + span.length);
}

/** 
 * @internal 
 * Creates a text change object from the specified start position, length, and new text.
 * @param start The starting position of the text change.
 * @param length The length of the text to be replaced.
 * @param newText The new text to insert.
 */
export function createTextChangeFromStartLength(start: number, length: number, newText: string): TextChange {
    return createTextChange(createTextSpan(start, length), newText);
}

/** 
 * @internal 
 * Creates a text change object with the specified span and new text.
 * @param span The span of text to be changed.
 * @param newText The new text to replace the span.
 */
export function createTextChange(span: TextSpan, newText: string): TextChange {
    return { span, newText };
}

/** @internal */
export const typeKeywords: readonly SyntaxKind[] = [
    SyntaxKind.AnyKeyword,
    SyntaxKind.AssertsKeyword,
    SyntaxKind.BigIntKeyword,
    SyntaxKind.BooleanKeyword,
    SyntaxKind.FalseKeyword,
    SyntaxKind.InferKeyword,
    SyntaxKind.KeyOfKeyword,
    SyntaxKind.NeverKeyword,
    SyntaxKind.NullKeyword,
    SyntaxKind.NumberKeyword,
    SyntaxKind.ObjectKeyword,
    SyntaxKind.ReadonlyKeyword,
    SyntaxKind.StringKeyword,
    SyntaxKind.SymbolKeyword,
    SyntaxKind.TypeOfKeyword,
    SyntaxKind.TrueKeyword,
    SyntaxKind.VoidKeyword,
    SyntaxKind.UndefinedKeyword,
    SyntaxKind.UniqueKeyword,
    SyntaxKind.UnknownKeyword,
];

/** 
 * @internal 
 * Determines if the given kind corresponds to a type keyword.
 * @param kind The syntax kind to check.
 */
export function isTypeKeyword(kind: SyntaxKind): boolean {
    return contains(typeKeywords, kind);
}

function isTypeKeywordToken(node: Node): node is Token<SyntaxKind.TypeKeyword> {
    return node.kind === SyntaxKind.TypeKeyword;
}

/** 
 * @internal 
 * Determines if a node is either a type keyword token or an identifier with the text "type".
 * @param node The node to check.
 */
export function isTypeKeywordTokenOrIdentifier(node: Node): boolean {
    return isTypeKeywordToken(node) || isIdentifier(node) && node.text === "type";
}

/**
 * Returns `true` the first time it encounters a node and `false` afterwards.
 *
 * @internal
 */
export type NodeSeenTracker<T = Node> = (node: T) => boolean;
/** 
 * Tracks whether a node has been seen before.
 * Returns true if the node has not been seen, and marks it as seen.
 * @param node - The node to check and mark as seen.
 */
export function nodeSeenTracker<T extends Node>(): NodeSeenTracker<T> {
    const seen: true[] = [];
    return node => {
        const id = getNodeId(node);
        return !seen[id] && (seen[id] = true);
    };
}

/** 
 * @internal 
 * Retrieves the full text from a script snapshot.
 * @param snap The script snapshot to extract text from.
 */
export function getSnapshotText(snap: IScriptSnapshot): string {
    return snap.getText(0, snap.getLength());
}

/** 
 * Repeats the given string a specified number of times and returns the concatenated result.
 * @param str The string to repeat.
 * @param count The number of times to repeat the string.
 * @internal 
 */
export function repeatString(str: string, count: number): string {
    let result = "";
    for (let i = 0; i < count; i++) {
        result += str;
    }
    return result;
}

/**
 * Skips the constraint of a type if it is a type parameter, returning the constraint or the type itself.
 * @param type - The type to process.
 */
export function skipConstraint(type: Type): Type {
    return type.isTypeParameter() ? type.getConstraint() || type : type;
}

/** 
 * @internal 
 * Retrieves the name from a PropertyName. 
 * For computed property names, returns the text if the expression is a string or numeric literal; otherwise, undefined. 
 * For private identifiers, returns the identifier text. 
 * For other cases, returns the text of the identifier or literal. 
 */
export function getNameFromPropertyName(name: PropertyName): string | undefined {
    return name.kind === SyntaxKind.ComputedPropertyName
        // treat computed property names where expression is string/numeric literal as just string/numeric literal
        ? isStringOrNumericLiteralLike(name.expression) ? name.expression.text : undefined
        : isPrivateIdentifier(name) ? idText(name) : getTextOfIdentifierOrLiteral(name);
}

/** 
 * @internal 
 * Determines if the program contains modules by checking its source files.
 * Considers files that are not declaration files, not from external libraries, and have module indicators.
 */
export function programContainsModules(program: Program): boolean {
    return program.getSourceFiles().some(s => !s.isDeclarationFile && !program.isSourceFileFromExternalLibrary(s) && !!(s.externalModuleIndicator || s.commonJsModuleIndicator));
}
/** 
 * @internal 
 * Determines if the program contains any ES modules.
 * Checks if any source file in the program is not a declaration file, is not from an external library, and has an external module indicator.
 */
export function programContainsEsModules(program: Program): boolean {
    return program.getSourceFiles().some(s => !s.isDeclarationFile && !program.isSourceFileFromExternalLibrary(s) && !!s.externalModuleIndicator);
}
// TODO: this function is, at best, poorly named. Use sites are pretty suspicious.
/** 
 * @internal 
 * Determines if the compiler options indicate the use of ES modules.
 * @param compilerOptions The compiler options to check.
 */
export function compilerOptionsIndicateEsModules(compilerOptions: CompilerOptions): boolean {
    return !!compilerOptions.module || getEmitScriptTarget(compilerOptions) >= ScriptTarget.ES2015 || !!compilerOptions.noEmit;
}

/** 
 * @internal
 * Creates a ModuleSpecifierResolutionHost by combining functionality from the provided program and host.
 * Mixes in `getSymlinkCache` from Program when the host doesn't have it to ensure non-Project hosts have a symlinks cache.
 * 
 * @param program The program to use for module specifier resolution.
 * @param host The language service host to use for module specifier resolution.
 */
export function createModuleSpecifierResolutionHost(program: Program, host: LanguageServiceHost): ModuleSpecifierResolutionHost {
    // Mix in `getSymlinkCache` from Program when host doesn't have it
    // in order for non-Project hosts to have a symlinks cache.
    return {
        fileExists: fileName => program.fileExists(fileName),
        getCurrentDirectory: () => host.getCurrentDirectory(),
        readFile: maybeBind(host, host.readFile),
        useCaseSensitiveFileNames: maybeBind(host, host.useCaseSensitiveFileNames) || program.useCaseSensitiveFileNames,
        getSymlinkCache: maybeBind(host, host.getSymlinkCache) || program.getSymlinkCache,
        getModuleSpecifierCache: maybeBind(host, host.getModuleSpecifierCache),
        getPackageJsonInfoCache: () => program.getModuleResolutionCache()?.getPackageJsonInfoCache(),
        getGlobalTypingsCacheLocation: maybeBind(host, host.getGlobalTypingsCacheLocation),
        redirectTargetsMap: program.redirectTargetsMap,
        getProjectReferenceRedirect: fileName => program.getProjectReferenceRedirect(fileName),
        isSourceOfProjectReferenceRedirect: fileName => program.isSourceOfProjectReferenceRedirect(fileName),
        getNearestAncestorDirectoryWithPackageJson: maybeBind(host, host.getNearestAncestorDirectoryWithPackageJson),
        getFileIncludeReasons: () => program.getFileIncludeReasons(),
        getCommonSourceDirectory: () => program.getCommonSourceDirectory(),
        getDefaultResolutionModeForFile: file => program.getDefaultResolutionModeForFile(file),
        getModeForResolutionAtIndex: (file, index) => program.getModeForResolutionAtIndex(file, index),
    };
}

/** 
 * @internal 
 * Resolves the module specifier host for a given program and language service host.
 * 
 * @param program The program instance used for module resolution.
 * @param host The language service host providing additional context for resolution.
 */
export function getModuleSpecifierResolverHost(program: Program, host: LanguageServiceHost): SymbolTracker["moduleResolverHost"] {
    return {
        ...createModuleSpecifierResolutionHost(program, host),
        getCommonSourceDirectory: () => program.getCommonSourceDirectory(),
    };
}

/** 
 * @internal
 * Determines if the module resolution strategy uses Node.js-style module resolution.
 * @param moduleResolution The module resolution kind to check.
 */
export function moduleResolutionUsesNodeModules(moduleResolution: ModuleResolutionKind): boolean {
    return moduleResolution === ModuleResolutionKind.Node10
        || moduleResolution >= ModuleResolutionKind.Node16 && moduleResolution <= ModuleResolutionKind.NodeNext
        || moduleResolution === ModuleResolutionKind.Bundler;
}

/** 
 * @internal
 * Creates an ImportDeclaration with the specified default import, named imports, module specifier, and quote preference.
 * @param defaultImport The default import identifier, if any.
 * @param namedImports The named imports, if any.
 * @param moduleSpecifier The module specifier, either as a string or an expression.
 * @param quotePreference The preferred quote style for string literals.
 * @param isTypeOnly Indicates if the import is type-only.
 */
export function makeImport(defaultImport: Identifier | undefined, namedImports: readonly ImportSpecifier[] | undefined, moduleSpecifier: string | Expression, quotePreference: QuotePreference, isTypeOnly?: boolean): ImportDeclaration {
    return factory.createImportDeclaration(
        /*modifiers*/ undefined,
        defaultImport || namedImports
            ? factory.createImportClause(!!isTypeOnly, defaultImport, namedImports && namedImports.length ? factory.createNamedImports(namedImports) : undefined)
            : undefined,
        typeof moduleSpecifier === "string" ? makeStringLiteral(moduleSpecifier, quotePreference) : moduleSpecifier,
        /*attributes*/ undefined,
    );
}

/** 
 * @internal 
 * Creates a string literal with the specified text and quote preference.
 * @param text The text content of the string literal.
 * @param quotePreference The preferred type of quotes for the string literal.
 */
export function makeStringLiteral(text: string, quotePreference: QuotePreference): StringLiteral {
    return factory.createStringLiteral(text, quotePreference === QuotePreference.Single);
}

/** @internal */
export const enum QuotePreference {
    Single,
    Double,
}

/** 
 * @internal 
 * Determines the preferred quote style for a string literal based on its usage in the source file.
 * @param str The string literal to evaluate.
 * @param sourceFile The source file containing the string literal.
 */
export function quotePreferenceFromString(str: StringLiteral, sourceFile: SourceFile): QuotePreference {
    return isStringDoubleQuoted(str, sourceFile) ? QuotePreference.Double : QuotePreference.Single;
}

/** 
 * @internal
 * Determines the preferred quote style for a given source file based on user preferences or the first module specifier in the file.
 * @param sourceFile The source file to analyze.
 * @param preferences The user's quote style preferences.
 * @returns The preferred quote style.
 */
export function getQuotePreference(sourceFile: SourceFile | FutureSourceFile, preferences: UserPreferences): QuotePreference {
    if (preferences.quotePreference && preferences.quotePreference !== "auto") {
        return preferences.quotePreference === "single" ? QuotePreference.Single : QuotePreference.Double;
    }
    else {
        // ignore synthetic import added when importHelpers: true
        const firstModuleSpecifier = isFullSourceFile(sourceFile) && sourceFile.imports &&
            find(sourceFile.imports, n => isStringLiteral(n) && !nodeIsSynthesized(n.parent)) as StringLiteral;
        return firstModuleSpecifier ? quotePreferenceFromString(firstModuleSpecifier, sourceFile) : QuotePreference.Double;
    }
}

/** 
 * @internal 
 * Returns the appropriate quote character based on the given quote preference.
 * @param qp - The quote preference to determine the quote character.
 */
export function getQuoteFromPreference(qp: QuotePreference): string {
    switch (qp) {
        case QuotePreference.Single:
            return "'";
        case QuotePreference.Double:
            return '"';
        default:
            return Debug.assertNever(qp);
    }
}

/** 
 * @internal 
 * Returns the name of a symbol without the "default" prefix, if applicable.
 * If the symbol's name does not have a "default" prefix, returns the unescaped name.
 * @param symbol The symbol to retrieve the name from.
 */
export function symbolNameNoDefault(symbol: Symbol): string | undefined {
    const escaped = symbolEscapedNameNoDefault(symbol);
    return escaped === undefined ? undefined : unescapeLeadingUnderscores(escaped);
}

/** 
 * @internal 
 * Returns the escaped name of a symbol if it is not the default symbol.
 * If the symbol is the default, attempts to retrieve the escaped name from its declarations.
 * @param symbol The symbol whose escaped name is to be retrieved.
 */
export function symbolEscapedNameNoDefault(symbol: Symbol): __String | undefined {
    if (symbol.escapedName !== InternalSymbolName.Default) {
        return symbol.escapedName;
    }

    return firstDefined(symbol.declarations, decl => {
        const name = getNameOfDeclaration(decl);
        return name && name.kind === SyntaxKind.Identifier ? name.escapedText : undefined;
    });
}

/** 
 * @internal 
 * Determines if a node is a module specifier-like string literal. 
 * A node is considered module specifier-like if it is a string literal and is part of an external module reference, 
 * an import declaration, a JSDoc import tag, a require call, or an import call.
 * @param node The node to test.
 */
export function isModuleSpecifierLike(node: Node): node is StringLiteralLike {
    return isStringLiteralLike(node) && (
        isExternalModuleReference(node.parent) ||
        isImportDeclaration(node.parent) ||
        isJSDocImportTag(node.parent) ||
        isRequireCall(node.parent, /*requireStringLiteralLikeArgument*/ false) && node.parent.arguments[0] === node ||
        isImportCall(node.parent) && node.parent.arguments[0] === node
    );
}

/** @internal */
export type ObjectBindingElementWithoutPropertyName = BindingElement & { name: Identifier; };

/** 
 * @internal 
 * Determines if the given binding element is an object binding element without a property name.
 * @param bindingElement - The binding element to check.
 */
export function isObjectBindingElementWithoutPropertyName(bindingElement: Node): bindingElement is ObjectBindingElementWithoutPropertyName {
    return isBindingElement(bindingElement) &&
        isObjectBindingPattern(bindingElement.parent) &&
        isIdentifier(bindingElement.name) &&
        !bindingElement.propertyName;
}

/** 
 * @internal 
 * Retrieves the property symbol from a binding element by using the type checker.
 * @param checker The type checker to use for retrieving the type and property.
 * @param bindingElement The binding element whose property symbol is to be retrieved.
 * @returns The symbol of the property if found, otherwise undefined.
 */
export function getPropertySymbolFromBindingElement(checker: TypeChecker, bindingElement: ObjectBindingElementWithoutPropertyName): Symbol | undefined {
    const typeOfPattern = checker.getTypeAtLocation(bindingElement.parent);
    return typeOfPattern && checker.getPropertyOfType(typeOfPattern, bindingElement.name.text);
}

/**
 * Gets the nearest parent node within the specified span.
 * 
 * @param node - The starting node to search from.
 * @param file - The source file containing the node.
 * @param span - The text span to constrain the search.
 * @returns The nearest parent node within the span, or undefined if none is found.
 * @internal
 */
export function getParentNodeInSpan(node: Node | undefined, file: SourceFile, span: TextSpan): Node | undefined {
    if (!node) return undefined;

    while (node.parent) {
        if (isSourceFile(node.parent) || !spanContainsNode(span, node.parent, file)) {
            return node;
        }

        node = node.parent;
    }
}

function spanContainsNode(span: TextSpan, node: Node, file: SourceFile): boolean {
    return textSpanContainsPosition(span, node.getStart(file)) &&
        node.getEnd() <= textSpanEnd(span);
}

/** 
 * @internal 
 * Finds a specific modifier of the given kind on a node.
 * @param node The node to search for the modifier.
 * @param kind The kind of modifier to find.
 * @returns The modifier if found, otherwise undefined.
 */
export function findModifier(node: Node, kind: Modifier["kind"]): Modifier | undefined {
    return canHaveModifiers(node) ? find(node.modifiers, (m): m is Modifier => m.kind === kind) : undefined;
}

/** 
 * @internal
 * Inserts import statements into a source file or a new file. 
 * Handles sorting and placement of imports based on existing imports and user preferences.
 * 
 * @param changes - The change tracker to apply the modifications.
 * @param sourceFile - The source file or future source file where imports will be added.
 * @param imports - The import statement(s) to insert.
 * @param blankLineBetween - Whether to insert a blank line between imports.
 * @param preferences - User preferences for organizing imports.
 */
export function insertImports(changes: textChanges.ChangeTracker, sourceFile: SourceFile | FutureSourceFile, imports: AnyImportOrRequireStatement | readonly AnyImportOrRequireStatement[], blankLineBetween: boolean, preferences: UserPreferences): void {
    const decl = isArray(imports) ? imports[0] : imports;
    const importKindPredicate: (node: Node) => node is AnyImportOrRequireStatement = decl.kind === SyntaxKind.VariableStatement ? isRequireVariableStatement : isAnyImportSyntax;
    const existingImportStatements = filter(sourceFile.statements, importKindPredicate);
    const { comparer, isSorted } = OrganizeImports.getOrganizeImportsStringComparerWithDetection(existingImportStatements, preferences);
    const sortedNewImports = isArray(imports) ? toSorted(imports, (a, b) => OrganizeImports.compareImportsOrRequireStatements(a, b, comparer)) : [imports];
    if (!existingImportStatements?.length) {
        if (isFullSourceFile(sourceFile)) {
            changes.insertNodesAtTopOfFile(sourceFile, sortedNewImports, blankLineBetween);
        }
        else {
            for (const newImport of sortedNewImports) {
                // Insert one at a time to send correct original source file for accurate text reuse
                // when some imports are cloned from existing ones in other files.
                changes.insertStatementsInNewFile(sourceFile.fileName, [newImport], getOriginalNode(newImport)?.getSourceFile());
            }
        }
        return;
    }

    Debug.assert(isFullSourceFile(sourceFile));
    if (existingImportStatements && isSorted) {
        for (const newImport of sortedNewImports) {
            const insertionIndex = OrganizeImports.getImportDeclarationInsertionIndex(existingImportStatements, newImport, comparer);
            if (insertionIndex === 0) {
                // If the first import is top-of-file, insert after the leading comment which is likely the header.
                const options = existingImportStatements[0] === sourceFile.statements[0] ?
                    { leadingTriviaOption: textChanges.LeadingTriviaOption.Exclude } : {};
                changes.insertNodeBefore(sourceFile, existingImportStatements[0], newImport, /*blankLineBetween*/ false, options);
            }
            else {
                const prevImport = existingImportStatements[insertionIndex - 1];
                changes.insertNodeAfter(sourceFile, prevImport, newImport);
            }
        }
    }
    else {
        const lastExistingImport = lastOrUndefined(existingImportStatements);
        if (lastExistingImport) {
            changes.insertNodesAfter(sourceFile, lastExistingImport, sortedNewImports);
        }
        else {
            changes.insertNodesAtTopOfFile(sourceFile, sortedNewImports, blankLineBetween);
        }
    }
}

/** 
 * @internal 
 * Retrieves the `type` keyword token from a type-only import clause.
 * @param importClause The import clause to extract the `type` keyword from.
 * @param sourceFile The source file containing the import clause.
 */
export function getTypeKeywordOfTypeOnlyImport(importClause: ImportClause, sourceFile: SourceFile): Token<SyntaxKind.TypeKeyword> {
    Debug.assert(importClause.isTypeOnly);
    return cast(importClause.getChildAt(0, sourceFile), isTypeKeywordToken);
}

/** 
 * @internal 
 * Checks if two text spans are equal by comparing their start positions and lengths.
 * @param a The first text span to compare.
 * @param b The second text span to compare.
 */
export function textSpansEqual(a: TextSpan | undefined, b: TextSpan | undefined): boolean {
    return !!a && !!b && a.start === b.start && a.length === b.length;
}
/** 
 * @internal 
 * Determines if two DocumentSpan objects are equal by comparing their file names and text spans.
 * @param a The first DocumentSpan to compare.
 * @param b The second DocumentSpan to compare.
 * @param useCaseSensitiveFileNames Whether to use case-sensitive comparison for file names.
 */
export function documentSpansEqual(a: DocumentSpan, b: DocumentSpan, useCaseSensitiveFileNames: boolean): boolean {
    return (useCaseSensitiveFileNames ? equateStringsCaseSensitive : equateStringsCaseInsensitive)(a.fileName, b.fileName) &&
        textSpansEqual(a.textSpan, b.textSpan);
}

/** 
 * @internal 
 * Returns an equality comparer for DocumentSpan objects.
 * @param useCaseSensitiveFileNames - Indicates whether file name comparisons should be case-sensitive.
 */
export function getDocumentSpansEqualityComparer(useCaseSensitiveFileNames: boolean): EqualityComparer<DocumentSpan> {
    return (a, b) => documentSpansEqual(a, b, useCaseSensitiveFileNames);
}

/**
 * Iterates through 'array' by index and performs the callback on each unique element of array (elements that appear for the first time) until the callback
 * returns a truthy value, then returns that value.
 * If no such value is found, the callback is applied to each unique element of array and undefined is returned.
 *
 * @param array The array to iterate over.
 * @param callback The function to apply to each unique element.
 * @internal
 */
export function forEachUnique<T, U>(array: readonly T[] | undefined, callback: (element: T, index: number) => U): U | undefined {
    if (array) {
        for (let i = 0; i < array.length; i++) {
            if (array.indexOf(array[i]) === i) {
                const result = callback(array[i], i);
                if (result) {
                    return result;
                }
            }
        }
    }
    return undefined;
}

/**
 * @internal
 * Determines if the specified range of text consists entirely of whitespace-like characters.
 * @param text The text to check.
 * @param startPos The starting position of the range.
 * @param endPos The ending position of the range.
 */
export function isTextWhiteSpaceLike(text: string, startPos: number, endPos: number): boolean {
    for (let i = startPos; i < endPos; i++) {
        if (!isWhiteSpaceLike(text.charCodeAt(i))) {
            return false;
        }
    }

    return true;
}

/** 
 * @internal 
 * Gets the mapped location in the source file for a given location in the generated file.
 * @param location The position in the generated file to map.
 * @param sourceMapper The source mapper to use for mapping positions.
 * @param fileExists Optional callback to check if a file exists.
 * @returns The mapped location in the source file, or undefined if mapping is not possible.
 */
export function getMappedLocation(location: DocumentPosition, sourceMapper: SourceMapper, fileExists: ((path: string) => boolean) | undefined): DocumentPosition | undefined {
    const mapsTo = sourceMapper.tryGetSourcePosition(location);
    return mapsTo && (!fileExists || fileExists(normalizePath(mapsTo.fileName)) ? mapsTo : undefined);
}

/** 
 * @internal
 * Maps a DocumentSpan to a new location using the provided source mapper.
 * 
 * @param documentSpan - The original DocumentSpan to be mapped.
 * @param sourceMapper - The source mapper used to map locations.
 * @param fileExists - Optional callback to check if a file exists.
 * @returns A new DocumentSpan with updated location information, or undefined if mapping fails.
 */
export function getMappedDocumentSpan(documentSpan: DocumentSpan, sourceMapper: SourceMapper, fileExists?: (path: string) => boolean): DocumentSpan | undefined {
    const { fileName, textSpan } = documentSpan;
    const newPosition = getMappedLocation({ fileName, pos: textSpan.start }, sourceMapper, fileExists);
    if (!newPosition) return undefined;
    const newEndPosition = getMappedLocation({ fileName, pos: textSpan.start + textSpan.length }, sourceMapper, fileExists);
    const newLength = newEndPosition
        ? newEndPosition.pos - newPosition.pos
        : textSpan.length; // This shouldn't happen
    return {
        fileName: newPosition.fileName,
        textSpan: {
            start: newPosition.pos,
            length: newLength,
        },
        originalFileName: documentSpan.fileName,
        originalTextSpan: documentSpan.textSpan,
        contextSpan: getMappedContextSpan(documentSpan, sourceMapper, fileExists),
        originalContextSpan: documentSpan.contextSpan,
    };
}

/** 
 * @internal
 * Maps the context span of a document span to its corresponding location in the source, if available.
 * @param documentSpan The document span containing the context span to map.
 * @param sourceMapper The source mapper used to map locations.
 * @param fileExists Optional function to check if a file exists.
 * @returns The mapped context span as a text span, or undefined if mapping is not possible.
 */
export function getMappedContextSpan(documentSpan: DocumentSpan, sourceMapper: SourceMapper, fileExists?: (path: string) => boolean): TextSpan | undefined {
    const contextSpanStart = documentSpan.contextSpan && getMappedLocation(
        { fileName: documentSpan.fileName, pos: documentSpan.contextSpan.start },
        sourceMapper,
        fileExists,
    );
    const contextSpanEnd = documentSpan.contextSpan && getMappedLocation(
        { fileName: documentSpan.fileName, pos: documentSpan.contextSpan.start + documentSpan.contextSpan.length },
        sourceMapper,
        fileExists,
    );
    return contextSpanStart && contextSpanEnd ?
        { start: contextSpanStart.pos, length: contextSpanEnd.pos - contextSpanStart.pos } :
        undefined;
}

// #endregion

// Display-part writer helpers
// #region
/** 
 * @internal 
 * Determines if the given symbol is the first declaration of a parameter.
 * @param symbol The symbol to check.
 */
export function isFirstDeclarationOfSymbolParameter(symbol: Symbol): boolean {
    const declaration = symbol.declarations ? firstOrUndefined(symbol.declarations) : undefined;
    return !!findAncestor(declaration, n => isParameter(n) ? true : isBindingElement(n) || isObjectBindingPattern(n) || isArrayBindingPattern(n) ? false : "quit");
}

const displayPartWriter = getDisplayPartWriter();
function getDisplayPartWriter(): DisplayPartsSymbolWriter {
    const absoluteMaximumLength = defaultMaximumTruncationLength * 10; // A hard cutoff to avoid overloading the messaging channel in worst-case scenarios
    let displayParts: SymbolDisplayPart[];
    let lineStart: boolean;
    let indent: number;
    let length: number;

    resetWriter();
    const unknownWrite = (text: string) => writeKind(text, SymbolDisplayPartKind.text);
    return {
        displayParts: () => {
            const finalText = displayParts.length && displayParts[displayParts.length - 1].text;
            if (length > absoluteMaximumLength && finalText && finalText !== "...") {
                if (!isWhiteSpaceLike(finalText.charCodeAt(finalText.length - 1))) {
                    displayParts.push(displayPart(" ", SymbolDisplayPartKind.space));
                }
                displayParts.push(displayPart("...", SymbolDisplayPartKind.punctuation));
            }
            return displayParts;
        },
        writeKeyword: text => writeKind(text, SymbolDisplayPartKind.keyword),
        writeOperator: text => writeKind(text, SymbolDisplayPartKind.operator),
        writePunctuation: text => writeKind(text, SymbolDisplayPartKind.punctuation),
        writeTrailingSemicolon: text => writeKind(text, SymbolDisplayPartKind.punctuation),
        writeSpace: text => writeKind(text, SymbolDisplayPartKind.space),
        writeStringLiteral: text => writeKind(text, SymbolDisplayPartKind.stringLiteral),
        writeParameter: text => writeKind(text, SymbolDisplayPartKind.parameterName),
        writeProperty: text => writeKind(text, SymbolDisplayPartKind.propertyName),
        writeLiteral: text => writeKind(text, SymbolDisplayPartKind.stringLiteral),
        writeSymbol,
        writeLine,
        write: unknownWrite,
        writeComment: unknownWrite,
        getText: () => "",
        getTextPos: () => 0,
        getColumn: () => 0,
        getLine: () => 0,
        isAtStartOfLine: () => false,
        hasTrailingWhitespace: () => false,
        hasTrailingComment: () => false,
        rawWrite: notImplemented,
        getIndent: () => indent,
        increaseIndent: () => {
            indent++;
        },
        decreaseIndent: () => {
            indent--;
        },
        clear: resetWriter,
    };

    function writeIndent() {
        if (length > absoluteMaximumLength) return;
        if (lineStart) {
            const indentString = getIndentString(indent);
            if (indentString) {
                length += indentString.length;
                displayParts.push(displayPart(indentString, SymbolDisplayPartKind.space));
            }
            lineStart = false;
        }
    }

    function writeKind(text: string, kind: SymbolDisplayPartKind) {
        if (length > absoluteMaximumLength) return;
        writeIndent();
        length += text.length;
        displayParts.push(displayPart(text, kind));
    }

    function writeSymbol(text: string, symbol: Symbol) {
        if (length > absoluteMaximumLength) return;
        writeIndent();
        length += text.length;
        displayParts.push(symbolPart(text, symbol));
    }

    function writeLine() {
        if (length > absoluteMaximumLength) return;
        length += 1;
        displayParts.push(lineBreakPart());
        lineStart = true;
    }

    function resetWriter() {
        displayParts = [];
        lineStart = true;
        indent = 0;
        length = 0;
    }
}

function symbolPart(text: string, symbol: Symbol) {
    return displayPart(text, displayPartKind(symbol));

    function displayPartKind(symbol: Symbol): SymbolDisplayPartKind {
        const flags = symbol.flags;

        if (flags & SymbolFlags.Variable) {
            return isFirstDeclarationOfSymbolParameter(symbol) ? SymbolDisplayPartKind.parameterName : SymbolDisplayPartKind.localName;
        }
        if (flags & SymbolFlags.Property) return SymbolDisplayPartKind.propertyName;
        if (flags & SymbolFlags.GetAccessor) return SymbolDisplayPartKind.propertyName;
        if (flags & SymbolFlags.SetAccessor) return SymbolDisplayPartKind.propertyName;
        if (flags & SymbolFlags.EnumMember) return SymbolDisplayPartKind.enumMemberName;
        if (flags & SymbolFlags.Function) return SymbolDisplayPartKind.functionName;
        if (flags & SymbolFlags.Class) return SymbolDisplayPartKind.className;
        if (flags & SymbolFlags.Interface) return SymbolDisplayPartKind.interfaceName;
        if (flags & SymbolFlags.Enum) return SymbolDisplayPartKind.enumName;
        if (flags & SymbolFlags.Module) return SymbolDisplayPartKind.moduleName;
        if (flags & SymbolFlags.Method) return SymbolDisplayPartKind.methodName;
        if (flags & SymbolFlags.TypeParameter) return SymbolDisplayPartKind.typeParameterName;
        if (flags & SymbolFlags.TypeAlias) return SymbolDisplayPartKind.aliasName;
        if (flags & SymbolFlags.Alias) return SymbolDisplayPartKind.aliasName;

        return SymbolDisplayPartKind.text;
    }
}

/** 
 * Creates a SymbolDisplayPart object with the specified text and kind.
 * @param text The text to display.
 * @param kind The kind of symbol display part.
 */
export function displayPart(text: string, kind: SymbolDisplayPartKind): SymbolDisplayPart {
    return { text, kind: SymbolDisplayPartKind[kind] };
}

/** 
 * Returns a symbol display part representing a single space.
 * @internal 
 */
export function spacePart(): SymbolDisplayPart {
    return displayPart(" ", SymbolDisplayPartKind.space);
}

/** 
 * @internal 
 * Returns a display part for a given syntax kind, formatted as a keyword.
 * @param kind The syntax kind to convert to a display part.
 */
export function keywordPart(kind: SyntaxKind): SymbolDisplayPart {
    return displayPart(tokenToString(kind)!, SymbolDisplayPartKind.keyword);
}

/** 
 * @internal 
 * Returns a symbol display part for the given punctuation kind.
 * @param kind The syntax kind of the punctuation.
 */
export function punctuationPart(kind: SyntaxKind): SymbolDisplayPart {
    return displayPart(tokenToString(kind)!, SymbolDisplayPartKind.punctuation);
}

/** 
 * @internal 
 * Returns a SymbolDisplayPart for the given operator SyntaxKind.
 * @param kind The SyntaxKind of the operator.
 */
export function operatorPart(kind: SyntaxKind): SymbolDisplayPart {
    return displayPart(tokenToString(kind)!, SymbolDisplayPartKind.operator);
}

/** 
 * @internal 
 * Returns a symbol display part for a parameter name.
 * @param text The text of the parameter name.
 */
export function parameterNamePart(text: string): SymbolDisplayPart {
    return displayPart(text, SymbolDisplayPartKind.parameterName);
}

/** 
 * @internal 
 * Returns a symbol display part for the given text, using the property name kind.
 * @param text The text to be displayed as a property name.
 */
export function propertyNamePart(text: string): SymbolDisplayPart {
    return displayPart(text, SymbolDisplayPartKind.propertyName);
}

/** 
 * @internal 
 * Converts a given text into a SymbolDisplayPart. 
 * If the text corresponds to a keyword, it returns a keyword part; otherwise, it returns a text part.
 * @param text The input text to convert.
 */
export function textOrKeywordPart(text: string): SymbolDisplayPart {
    const kind = stringToToken(text);
    return kind === undefined
        ? textPart(text)
        : keywordPart(kind);
}

/** 
 * @internal 
 * Creates a symbol display part for the given text.
 * @param text The text to be displayed as a symbol display part.
 */
export function textPart(text: string): SymbolDisplayPart {
    return displayPart(text, SymbolDisplayPartKind.text);
}

/** 
 * @internal 
 * Returns a display part for the given text, using the alias name kind.
 * @param text The text to create a display part for.
 */
export function typeAliasNamePart(text: string): SymbolDisplayPart {
    return displayPart(text, SymbolDisplayPartKind.aliasName);
}

/** 
 * @internal 
 * Returns a display part for a type parameter name.
 * @param text The text to be displayed as a type parameter name.
 */
export function typeParameterNamePart(text: string): SymbolDisplayPart {
    return displayPart(text, SymbolDisplayPartKind.typeParameterName);
}

function linkTextPart(text: string) {
    return displayPart(text, SymbolDisplayPartKind.linkText);
}

function linkNamePart(text: string, target: Declaration): JSDocLinkDisplayPart {
    return {
        text,
        kind: SymbolDisplayPartKind[SymbolDisplayPartKind.linkName],
        target: {
            fileName: getSourceFileOfNode(target).fileName,
            textSpan: createTextSpanFromNode(target),
        },
    };
}

function linkPart(text: string) {
    return displayPart(text, SymbolDisplayPartKind.link);
}

/** 
 * @internal
 * Builds the parts of a link for JSDoc, including its prefix, name, and text.
 * @param link The JSDoc link to process.
 * @param checker Optional type checker to resolve symbols.
 * @returns An array of symbol display parts representing the link.
 */
export function buildLinkParts(link: JSDocLink | JSDocLinkCode | JSDocLinkPlain, checker?: TypeChecker): SymbolDisplayPart[] {
    const prefix = isJSDocLink(link) ? "link"
        : isJSDocLinkCode(link) ? "linkcode"
        : "linkplain";
    const parts = [linkPart(`{@${prefix} `)];
    if (!link.name) {
        if (link.text) {
            parts.push(linkTextPart(link.text));
        }
    }
    else {
        const symbol = checker?.getSymbolAtLocation(link.name);
        const targetSymbol = symbol && checker ? getSymbolTarget(symbol, checker) : undefined;
        const suffix = findLinkNameEnd(link.text);
        const name = getTextOfNode(link.name) + link.text.slice(0, suffix);
        const text = skipSeparatorFromLinkText(link.text.slice(suffix));
        const decl = targetSymbol?.valueDeclaration || targetSymbol?.declarations?.[0];
        if (decl) {
            parts.push(linkNamePart(name, decl));
            if (text) parts.push(linkTextPart(text));
        }
        else {
            const separator = suffix === 0 || (link.text.charCodeAt(suffix) === CharacterCodes.bar && name.charCodeAt(name.length - 1) !== CharacterCodes.space) ? " " : "";
            parts.push(linkTextPart(name + separator + text));
        }
    }
    parts.push(linkPart("}"));
    return parts;
}

function skipSeparatorFromLinkText(text: string) {
    let pos = 0;
    if (text.charCodeAt(pos++) === CharacterCodes.bar) {
        while (pos < text.length && text.charCodeAt(pos) === CharacterCodes.space) pos++;
        return text.slice(pos);
    }
    return text;
}

function findLinkNameEnd(text: string) {
    let pos = text.indexOf("://");
    if (pos === 0) {
        while (pos < text.length && text.charCodeAt(pos) !== CharacterCodes.bar) pos++;
        return pos;
    }
    if (text.indexOf("()") === 0) return 2;
    if (text.charAt(0) === "<") {
        let brackets = 0;
        let i = 0;
        while (i < text.length) {
            if (text[i] === "<") brackets++;
            if (text[i] === ">") brackets--;
            i++;
            if (!brackets) return i;
        }
    }
    return 0;
}

const lineFeed = "\n";
/**
 * Gets the newline character to use, defaulting to LF if none is specified.
 *
 * @param host - The formatting host providing the newline character.
 * @param formatSettings - Optional settings that may specify a newline character.
 * @returns The newline character to use.
 *
 * @internal
 */
export function getNewLineOrDefaultFromHost(host: FormattingHost, formatSettings: FormatCodeSettings | undefined): string {
    return formatSettings?.newLineCharacter ||
        host.getNewLine?.() ||
        lineFeed;
}

/** 
 * @internal 
 * Returns a symbol display part representing a line break.
 */
export function lineBreakPart(): SymbolDisplayPart {
    return displayPart("\n", SymbolDisplayPartKind.lineBreak);
}

/** 
 * Maps the provided function to display parts.
 * 
 * @param writeDisplayParts - A function that writes display parts using a DisplayPartsSymbolWriter.
 */
export function mapToDisplayParts(writeDisplayParts: (writer: DisplayPartsSymbolWriter) => void): SymbolDisplayPart[] {
    try {
        writeDisplayParts(displayPartWriter);
        return displayPartWriter.displayParts();
    }
    finally {
        displayPartWriter.clear();
    }
}

/** 
 * @internal
 * Converts a type to its display parts representation.
 * @param typechecker The type checker to use for type conversion.
 * @param type The type to be converted.
 * @param enclosingDeclaration The enclosing declaration context, if any.
 * @param flags Additional formatting flags to control the output.
 */
export function typeToDisplayParts(typechecker: TypeChecker, type: Type, enclosingDeclaration?: Node, flags: TypeFormatFlags = TypeFormatFlags.None): SymbolDisplayPart[] {
    return mapToDisplayParts(writer => {
        typechecker.writeType(type, enclosingDeclaration, flags | TypeFormatFlags.MultilineObjectLiterals | TypeFormatFlags.UseAliasDefinedOutsideCurrentScope, writer);
    });
}

/** 
 * @internal 
 * Converts a symbol to an array of display parts for presentation.
 * @param typeChecker The type checker used to write the symbol.
 * @param symbol The symbol to convert to display parts.
 * @param enclosingDeclaration The enclosing declaration context, if any.
 * @param meaning The meaning of the symbol, if specified.
 * @param flags Additional formatting flags for symbol display.
 */
export function symbolToDisplayParts(typeChecker: TypeChecker, symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags: SymbolFormatFlags = SymbolFormatFlags.None): SymbolDisplayPart[] {
    return mapToDisplayParts(writer => {
        typeChecker.writeSymbol(symbol, enclosingDeclaration, meaning, flags | SymbolFormatFlags.UseAliasDefinedOutsideCurrentScope, writer);
    });
}

/** 
 * @internal 
 * Converts a signature to display parts for presentation.
 * 
 * @param typechecker The type checker used for type analysis.
 * @param signature The signature to convert to display parts.
 * @param enclosingDeclaration The enclosing declaration for context, if any.
 * @param flags Additional formatting flags to customize the output.
 */
export function signatureToDisplayParts(typechecker: TypeChecker, signature: Signature, enclosingDeclaration?: Node, flags: TypeFormatFlags = TypeFormatFlags.None): SymbolDisplayPart[] {
    flags |= TypeFormatFlags.UseAliasDefinedOutsideCurrentScope | TypeFormatFlags.MultilineObjectLiterals | TypeFormatFlags.WriteTypeArgumentsOfSignature | TypeFormatFlags.OmitParameterModifiers;
    return mapToDisplayParts(writer => {
        typechecker.writeSignature(signature, enclosingDeclaration, flags, /*kind*/ undefined, writer);
    });
}

/**
 * Determines if the given location is the name of an import or export specifier.
 * @param location - The node to check.
 */
export function isImportOrExportSpecifierName(location: Node): location is Identifier {
    return !!location.parent && isImportOrExportSpecifier(location.parent) && location.parent.propertyName === location;
}

/** 
 * @internal 
 * Determines the script kind for a given file name, optionally using the host to override the default.
 * @param fileName The name of the file to determine the script kind for.
 * @param host The language service host that may provide an override for the script kind.
 */
export function getScriptKind(fileName: string, host: LanguageServiceHost): ScriptKind {
    // First check to see if the script kind was specified by the host. Chances are the host
    // may override the default script kind for the file extension.
    return ensureScriptKind(fileName, host.getScriptKind && host.getScriptKind(fileName));
}

/** 
 * @internal 
 * Retrieves the ultimate target of a symbol by following alias and transient symbol links.
 * @param symbol The symbol to resolve to its target.
 * @param checker The type checker used to resolve aliases.
 */
export function getSymbolTarget(symbol: Symbol, checker: TypeChecker): Symbol {
    let next: Symbol = symbol;
    while (isAliasSymbol(next) || (isTransientSymbol(next) && next.links.target)) {
        if (isTransientSymbol(next) && next.links.target) {
            next = next.links.target;
        }
        else {
            next = skipAlias(next, checker);
        }
    }
    return next;
}

function isAliasSymbol(symbol: Symbol): boolean {
    return (symbol.flags & SymbolFlags.Alias) !== 0;
}

/** 
 * @internal 
 * Retrieves a unique identifier for a symbol by skipping any aliases and using the symbol's ID.
 * @param symbol The symbol for which to retrieve the unique identifier.
 * @param checker The type checker used to resolve aliases.
 */
export function getUniqueSymbolId(symbol: Symbol, checker: TypeChecker): number {
    return getSymbolId(skipAlias(symbol, checker));
}

/** 
 * @internal 
 * Gets the position of the first non-whitespace character in the given text starting from the specified position.
 * @param text The string to search.
 * @param position The starting position for the search.
 * @returns The position of the first non-whitespace character.
 */
export function getFirstNonSpaceCharacterPosition(text: string, position: number): number {
    while (isWhiteSpaceLike(text.charCodeAt(position))) {
        position += 1;
    }
    return position;
}

/** 
 * @internal 
 * Gets the position of the first non-whitespace character preceding the specified position in the given text.
 * @param text The text to search.
 * @param position The position to start searching backward from.
 * @returns The position of the first non-whitespace character, or 0 if none is found.
 */
export function getPrecedingNonSpaceCharacterPosition(text: string, position: number): number {
    while (position > -1 && isWhiteSpaceSingleLine(text.charCodeAt(position))) {
        position -= 1;
    }
    return position + 1;
}

/**
 * Creates a deep, memberwise clone of a node with no source map location.
 *
 * WARNING: This is an expensive operation and is only intended to be used in refactorings
 * and code fixes (because those are triggered by explicit user actions).
 *
 * @param node The node to clone.
 * @param includeTrivia Whether to include trivia (leading and trailing comments) in the clone.
 * @returns The deep clone of the node with parent pointers set recursively.
 *
 * @internal
 */
export function getSynthesizedDeepClone<T extends Node | undefined>(node: T, includeTrivia = true): T {
    const clone = node && getSynthesizedDeepCloneWorker(node);
    if (clone && !includeTrivia) suppressLeadingAndTrailingTrivia(clone);
    return setParentRecursive(clone, /*incremental*/ false);
}

/** 
 * @internal 
 * Creates a deep clone of a node with optional replacements and trivia suppression.
 * @param node The node to clone.
 * @param includeTrivia Whether to include trivia in the cloned node.
 * @param replaceNode A callback to replace specific nodes during cloning.
 */
export function getSynthesizedDeepCloneWithReplacements<T extends Node>(
    node: T,
    includeTrivia: boolean,
    replaceNode: (node: Node) => Node | undefined,
): T {
    let clone = replaceNode(node);
    if (clone) {
        setOriginalNode(clone, node);
    }
    else {
        clone = getSynthesizedDeepCloneWorker(node as NonNullable<T>, replaceNode);
    }

    if (clone && !includeTrivia) suppressLeadingAndTrailingTrivia(clone);
    return clone as T;
}

function getSynthesizedDeepCloneWorker<T extends Node>(node: T, replaceNode?: (node: Node) => Node | undefined): T {
    const nodeClone: <T extends Node>(n: T) => T = replaceNode
        ? n => getSynthesizedDeepCloneWithReplacements(n, /*includeTrivia*/ true, replaceNode)
        : getSynthesizedDeepClone;
    const nodesClone: <T extends Node>(ns: NodeArray<T> | undefined) => NodeArray<T> | undefined = replaceNode
        ? ns => ns && getSynthesizedDeepClonesWithReplacements(ns, /*includeTrivia*/ true, replaceNode)
        : ns => ns && getSynthesizedDeepClones(ns);
    const visited = visitEachChild(node, nodeClone, /*context*/ undefined, nodesClone, nodeClone);

    if (visited === node) {
        // This only happens for leaf nodes - internal nodes always see their children change.
        const clone = isStringLiteral(node) ? setOriginalNode(factory.createStringLiteralFromNode(node), node) as Node as T :
            isNumericLiteral(node) ? setOriginalNode(factory.createNumericLiteral(node.text, node.numericLiteralFlags), node) as Node as T :
            factory.cloneNode(node);
        return setTextRange(clone, node);
    }

    // PERF: As an optimization, rather than calling factory.cloneNode, we'll update
    // the new node created by visitEachChild with the extra changes factory.cloneNode
    // would have made.
    (visited as Mutable<T>).parent = undefined!;
    return visited;
}

/** @internal */
export function getSynthesizedDeepClones<T extends Node>(nodes: NodeArray<T>, includeTrivia?: boolean): NodeArray<T>;
/** @internal */
export function getSynthesizedDeepClones<T extends Node>(nodes: NodeArray<T> | undefined, includeTrivia?: boolean): NodeArray<T> | undefined;
/** 
 * @internal 
 * Clones an array of nodes deeply, optionally including trivia.
 * @param nodes The array of nodes to clone.
 * @param includeTrivia Whether to include trivia in the clone. Defaults to true.
 */
export function getSynthesizedDeepClones<T extends Node>(nodes: NodeArray<T> | undefined, includeTrivia = true): NodeArray<T> | undefined {
    if (nodes) {
        const cloned = factory.createNodeArray(nodes.map(n => getSynthesizedDeepClone(n, includeTrivia)), nodes.hasTrailingComma);
        setTextRange(cloned, nodes);
        return cloned;
    }
    return nodes;
}

/** 
 * @internal 
 * Creates a deep clone of the given nodes with optional replacements and trivia inclusion.
 * @param nodes The array of nodes to clone.
 * @param includeTrivia Whether to include trivia in the cloned nodes.
 * @param replaceNode A callback function to replace specific nodes during cloning.
 */
export function getSynthesizedDeepClonesWithReplacements<T extends Node>(
    nodes: NodeArray<T>,
    includeTrivia: boolean,
    replaceNode: (node: Node) => Node | undefined,
): NodeArray<T> {
    return factory.createNodeArray(nodes.map(n => getSynthesizedDeepCloneWithReplacements(n, includeTrivia, replaceNode)), nodes.hasTrailingComma);
}

/**
 * Sets EmitFlags to suppress leading and trailing trivia on the node.
 * 
 * @param node The node for which leading and trailing trivia will be suppressed.
 *
 * @internal
 */
export function suppressLeadingAndTrailingTrivia(node: Node): void {
    suppressLeadingTrivia(node);
    suppressTrailingTrivia(node);
}

/**
 * Sets EmitFlags to suppress leading trivia on the node and its descendants.
 *
 * @param node The node whose leading trivia should be suppressed.
 *
 * @internal
 */
export function suppressLeadingTrivia(node: Node): void {
    addEmitFlagsRecursively(node, EmitFlags.NoLeadingComments, getFirstChild);
}

/**
 * Sets EmitFlags to suppress trailing trivia on the node and its descendants.
 *
 * @param node The node for which to suppress trailing trivia.
 *
 * @internal @knipignore
 */
export function suppressTrailingTrivia(node: Node): void {
    addEmitFlagsRecursively(node, EmitFlags.NoTrailingComments, getLastChild);
}

/** 
 * Copies comments from the source node to the target node.
 * Ensures leading comments, trailing comments, and line breaks are preserved.
 * @param sourceNode The node from which comments are copied.
 * @param targetNode The node to which comments are copied.
 */
export function copyComments(sourceNode: Node, targetNode: Node): void {
    const sourceFile = sourceNode.getSourceFile();
    const text = sourceFile.text;
    if (hasLeadingLineBreak(sourceNode, text)) {
        copyLeadingComments(sourceNode, targetNode, sourceFile);
    }
    else {
        copyTrailingAsLeadingComments(sourceNode, targetNode, sourceFile);
    }
    copyTrailingComments(sourceNode, targetNode, sourceFile);
}

function hasLeadingLineBreak(node: Node, text: string) {
    const start = node.getFullStart();
    const end = node.getStart();
    for (let i = start; i < end; i++) {
        if (text.charCodeAt(i) === CharacterCodes.lineFeed) return true;
    }
    return false;
}

function addEmitFlagsRecursively(node: Node, flag: EmitFlags, getChild: (n: Node) => Node | undefined) {
    addEmitFlags(node, flag);
    const child = getChild(node);
    if (child) addEmitFlagsRecursively(child, flag, getChild);
}

function getFirstChild(node: Node): Node | undefined {
    return node.forEachChild(child => child);
}

/** 
 * @internal 
 * Generates a unique name based on the provided base name within the given source file.
 * 
 * @param baseName The base name to use for generating the unique name.
 * @param sourceFile The source file to check for uniqueness.
 */
export function getUniqueName(baseName: string, sourceFile: SourceFile): string {
    let nameText = baseName;
    for (let i = 1; !isFileLevelUniqueName(sourceFile, nameText); i++) {
        nameText = `${baseName}_${i}`;
    }
    return nameText;
}

/**
 * Gets the index of the reference to the extracted symbol in the provided edits.
 * The cursor will be placed on the reference rather than the declaration.
 *
 * @param edits The list of file text changes to search through.
 * @param renameFilename The name of the file containing the symbol to rename.
 * @param name The name of the symbol to locate.
 * @param preferLastLocation Whether to prefer the last occurrence of the symbol.
 * @return The index of the reference to the extracted symbol.
 *
 * @internal
 */
export function getRenameLocation(edits: readonly FileTextChanges[], renameFilename: string, name: string, preferLastLocation: boolean): number {
    let delta = 0;
    let lastPos = -1;
    for (const { fileName, textChanges } of edits) {
        Debug.assert(fileName === renameFilename);
        for (const change of textChanges) {
            const { span, newText } = change;
            const index = indexInTextChange(newText, escapeString(name));
            if (index !== -1) {
                lastPos = span.start + delta + index;

                // If the reference comes first, return immediately.
                if (!preferLastLocation) {
                    return lastPos;
                }
            }
            delta += newText.length - span.length;
        }
    }

    // If the declaration comes first, return the position of the last occurrence.
    Debug.assert(preferLastLocation);
    Debug.assert(lastPos >= 0);
    return lastPos;
}

/**
 * @internal
 * Copies leading comments from the source node to the target node.
 * @param sourceNode The node from which to copy comments.
 * @param targetNode The node to which to add comments.
 * @param sourceFile The source file containing the comments.
 * @param commentKind The kind of comments to copy.
 * @param hasTrailingNewLine Whether to add a trailing newline after the comments.
 */
export function copyLeadingComments(sourceNode: Node, targetNode: Node, sourceFile: SourceFile, commentKind?: CommentKind, hasTrailingNewLine?: boolean): void {
    forEachLeadingCommentRange(sourceFile.text, sourceNode.pos, getAddCommentsFunction(targetNode, sourceFile, commentKind, hasTrailingNewLine, addSyntheticLeadingComment));
}

/**
 * Copies trailing comments from the source node to the target node.
 * 
 * @param sourceNode The node from which to copy trailing comments.
 * @param targetNode The node to which the trailing comments will be added.
 * @param sourceFile The source file containing the nodes.
 * @param commentKind Optional. The kind of comments to copy.
 * @param hasTrailingNewLine Optional. Whether to add a trailing newline after the comments.
 */
export function copyTrailingComments(sourceNode: Node, targetNode: Node, sourceFile: SourceFile, commentKind?: CommentKind, hasTrailingNewLine?: boolean): void {
    forEachTrailingCommentRange(sourceFile.text, sourceNode.end, getAddCommentsFunction(targetNode, sourceFile, commentKind, hasTrailingNewLine, addSyntheticTrailingComment));
}

/**
 * Copies the trailing comments for the token that comes before `sourceNode`, as leading comments of `targetNode`.
 * This is useful because sometimes a comment that refers to `sourceNode` will be a leading comment for `sourceNode`, according to the
 * notion of trivia ownership, and instead will be a trailing comment for the token before `sourceNode`, e.g.:
 * `function foo(/* not leading comment for a */ a: string) {}`.
 * The comment refers to `a` but belongs to the `(` token, but we might want to copy it.
 *
 * @param sourceNode The node whose preceding token's trailing comments will be copied.
 * @param targetNode The node to which the comments will be added as leading comments.
 * @param sourceFile The source file containing the nodes.
 * @param commentKind Optional. The kind of comments to copy.
 * @param hasTrailingNewLine Optional. Whether to add a trailing newline after the copied comments.
 * @internal
 */
export function copyTrailingAsLeadingComments(sourceNode: Node, targetNode: Node, sourceFile: SourceFile, commentKind?: CommentKind, hasTrailingNewLine?: boolean): void {
    forEachTrailingCommentRange(sourceFile.text, sourceNode.pos, getAddCommentsFunction(targetNode, sourceFile, commentKind, hasTrailingNewLine, addSyntheticLeadingComment));
}

function getAddCommentsFunction(targetNode: Node, sourceFile: SourceFile, commentKind: CommentKind | undefined, hasTrailingNewLine: boolean | undefined, cb: (node: Node, kind: CommentKind, text: string, hasTrailingNewLine?: boolean) => void) {
    return (pos: number, end: number, kind: CommentKind, htnl: boolean) => {
        if (kind === SyntaxKind.MultiLineCommentTrivia) {
            // Remove leading /*
            pos += 2;
            // Remove trailing */
            end -= 2;
        }
        else {
            // Remove leading //
            pos += 2;
        }
        cb(targetNode, commentKind || kind, sourceFile.text.slice(pos, end), hasTrailingNewLine !== undefined ? hasTrailingNewLine : htnl);
    };
}

function indexInTextChange(change: string, name: string): number {
    if (startsWith(change, name)) return 0;
    // Add a " " to avoid references inside words
    let idx = change.indexOf(" " + name);
    if (idx === -1) idx = change.indexOf("." + name);
    if (idx === -1) idx = change.indexOf('"' + name);
    return idx === -1 ? -1 : idx + 1;
}

/**
 * Determines if the given expression needs parentheses.
 * Checks for binary expressions with a comma operator, object literal expressions,
 * or certain type assertions applied to object literal expressions.
 * @param expression The expression to check.
 */
export function needsParentheses(expression: Expression): boolean {
    return isBinaryExpression(expression) && expression.operatorToken.kind === SyntaxKind.CommaToken
        || isObjectLiteralExpression(expression)
        || (isAsExpression(expression) || isSatisfiesExpression(expression)) && isObjectLiteralExpression(expression.expression);
}

/** 
 * @internal 
 * Retrieves the contextual type of a given node based on its parent expression.
 * 
 * @param node The expression node for which to determine the contextual type.
 * @param checker The type checker used to retrieve types.
 * @param contextFlags Optional flags providing additional context for type resolution.
 */
export function getContextualTypeFromParent(node: Expression, checker: TypeChecker, contextFlags?: ContextFlags): Type | undefined {
    const parent = walkUpParenthesizedExpressions(node.parent);
    switch (parent.kind) {
        case SyntaxKind.NewExpression:
            return checker.getContextualType(parent as NewExpression, contextFlags);
        case SyntaxKind.BinaryExpression: {
            const { left, operatorToken, right } = parent as BinaryExpression;
            return isEqualityOperatorKind(operatorToken.kind)
                ? checker.getTypeAtLocation(node === right ? left : right)
                : checker.getContextualType(node, contextFlags);
        }
        case SyntaxKind.CaseClause:
            return getSwitchedType(parent as CaseClause, checker);
        default:
            return checker.getContextualType(node, contextFlags);
    }
}

/** 
 * @internal 
 * Quotes a given text based on the inferred or specified quote preference.
 * 
 * @param sourceFile The source file to infer the quote preference from.
 * @param preferences User preferences that may specify the quote style.
 * @param text The text to be quoted.
 */
export function quote(sourceFile: SourceFile, preferences: UserPreferences, text: string): string {
    // Editors can pass in undefined or empty string - we want to infer the preference in those cases.
    const quotePreference = getQuotePreference(sourceFile, preferences);
    const quoted = JSON.stringify(text);
    return quotePreference === QuotePreference.Single ? `'${stripQuotes(quoted).replace(/'/g, () => "\\'").replace(/\\"/g, '"')}'` : quoted;
}

/** 
 * @internal 
 * Determines if the given kind is an equality operator.
 * @param kind The syntax kind to check.
 * @returns True if the kind is an equality operator, otherwise false.
 */
export function isEqualityOperatorKind(kind: SyntaxKind): kind is EqualityOperator {
    switch (kind) {
        case SyntaxKind.EqualsEqualsEqualsToken:
        case SyntaxKind.EqualsEqualsToken:
        case SyntaxKind.ExclamationEqualsEqualsToken:
        case SyntaxKind.ExclamationEqualsToken:
            return true;
        default:
            return false;
    }
}

/**
 * Determines if a node is a string literal, a template expression, or a tagged template expression.
 */
export function isStringLiteralOrTemplate(node: Node): node is StringLiteralLike | TemplateExpression | TaggedTemplateExpression {
    switch (node.kind) {
        case SyntaxKind.StringLiteral:
        case SyntaxKind.NoSubstitutionTemplateLiteral:
        case SyntaxKind.TemplateExpression:
        case SyntaxKind.TaggedTemplateExpression:
            return true;
        default:
            return false;
    }
}

/**
 * @internal
 * Checks if the given type has an index signature.
 * @param type - The type to check for index signatures.
 */
export function hasIndexSignature(type: Type): boolean {
    return !!type.getStringIndexType() || !!type.getNumberIndexType();
}

/** 
 * @internal 
 * Retrieves the type of the expression being switched on in a case clause.
 * @param caseClause The case clause to analyze.
 * @param checker The type checker used to retrieve the type.
 */
export function getSwitchedType(caseClause: CaseClause, checker: TypeChecker): Type | undefined {
    return checker.getTypeAtLocation(caseClause.parent.parent.expression);
}

/** @internal */
export const ANONYMOUS = "anonymous function";

/** 
 * @internal 
 * Converts a type to a TypeNode if the type is accessible within the given scope.
 * 
 * @param type - The type to convert.
 * @param enclosingScope - The node representing the scope in which the type is being accessed.
 * @param program - The program instance containing the type checker.
 * @param host - The language service host used for module resolution.
 * @returns The TypeNode representation of the type if accessible, otherwise undefined.
 */
export function getTypeNodeIfAccessible(type: Type, enclosingScope: Node, program: Program, host: LanguageServiceHost): TypeNode | undefined {
    const checker = program.getTypeChecker();
    let typeIsAccessible = true;
    const notAccessible = () => typeIsAccessible = false;
    const res = checker.typeToTypeNode(type, enclosingScope, NodeBuilderFlags.NoTruncation, InternalNodeBuilderFlags.AllowUnresolvedNames, {
        trackSymbol: (symbol, declaration, meaning) => {
            typeIsAccessible = typeIsAccessible && checker.isSymbolAccessible(symbol, declaration, meaning, /*shouldComputeAliasToMarkVisible*/ false).accessibility === SymbolAccessibility.Accessible;
            return !typeIsAccessible;
        },
        reportInaccessibleThisError: notAccessible,
        reportPrivateInBaseOfClassExpression: notAccessible,
        reportInaccessibleUniqueSymbolError: notAccessible,
        moduleResolverHost: getModuleSpecifierResolverHost(program, host),
    });
    return typeIsAccessible ? res : undefined;
}

function syntaxRequiresTrailingCommaOrSemicolonOrASI(kind: SyntaxKind) {
    return kind === SyntaxKind.CallSignature
        || kind === SyntaxKind.ConstructSignature
        || kind === SyntaxKind.IndexSignature
        || kind === SyntaxKind.PropertySignature
        || kind === SyntaxKind.MethodSignature;
}

function syntaxRequiresTrailingFunctionBlockOrSemicolonOrASI(kind: SyntaxKind) {
    return kind === SyntaxKind.FunctionDeclaration
        || kind === SyntaxKind.Constructor
        || kind === SyntaxKind.MethodDeclaration
        || kind === SyntaxKind.GetAccessor
        || kind === SyntaxKind.SetAccessor;
}

function syntaxRequiresTrailingModuleBlockOrSemicolonOrASI(kind: SyntaxKind) {
    return kind === SyntaxKind.ModuleDeclaration;
}

function syntaxRequiresTrailingSemicolonOrASI(kind: SyntaxKind) {
    return kind === SyntaxKind.VariableStatement
        || kind === SyntaxKind.ExpressionStatement
        || kind === SyntaxKind.DoStatement
        || kind === SyntaxKind.ContinueStatement
        || kind === SyntaxKind.BreakStatement
        || kind === SyntaxKind.ReturnStatement
        || kind === SyntaxKind.ThrowStatement
        || kind === SyntaxKind.DebuggerStatement
        || kind === SyntaxKind.PropertyDeclaration
        || kind === SyntaxKind.TypeAliasDeclaration
        || kind === SyntaxKind.ImportDeclaration
        || kind === SyntaxKind.ImportEqualsDeclaration
        || kind === SyntaxKind.ExportDeclaration
        || kind === SyntaxKind.NamespaceExportDeclaration
        || kind === SyntaxKind.ExportAssignment;
}

const syntaxMayBeASICandidate = or(
    syntaxRequiresTrailingCommaOrSemicolonOrASI,
    syntaxRequiresTrailingFunctionBlockOrSemicolonOrASI,
    syntaxRequiresTrailingModuleBlockOrSemicolonOrASI,
    syntaxRequiresTrailingSemicolonOrASI,
);

function nodeIsASICandidate(node: Node, sourceFile: SourceFileLike): boolean {
    const lastToken = node.getLastToken(sourceFile);
    if (lastToken && lastToken.kind === SyntaxKind.SemicolonToken) {
        return false;
    }

    if (syntaxRequiresTrailingCommaOrSemicolonOrASI(node.kind)) {
        if (lastToken && lastToken.kind === SyntaxKind.CommaToken) {
            return false;
        }
    }
    else if (syntaxRequiresTrailingModuleBlockOrSemicolonOrASI(node.kind)) {
        const lastChild = last(node.getChildren(sourceFile));
        if (lastChild && isModuleBlock(lastChild)) {
            return false;
        }
    }
    else if (syntaxRequiresTrailingFunctionBlockOrSemicolonOrASI(node.kind)) {
        const lastChild = last(node.getChildren(sourceFile));
        if (lastChild && isFunctionBlock(lastChild)) {
            return false;
        }
    }
    else if (!syntaxRequiresTrailingSemicolonOrASI(node.kind)) {
        return false;
    }

    // See comment in parser's `parseDoStatement`
    if (node.kind === SyntaxKind.DoStatement) {
        return true;
    }

    const topNode = findAncestor(node, ancestor => !ancestor.parent)!;
    const nextToken = findNextToken(node, topNode, sourceFile);
    if (!nextToken || nextToken.kind === SyntaxKind.CloseBraceToken) {
        return true;
    }

    const startLine = sourceFile.getLineAndCharacterOfPosition(node.getEnd()).line;
    const endLine = sourceFile.getLineAndCharacterOfPosition(nextToken.getStart(sourceFile)).line;
    return startLine !== endLine;
}

/** 
 * @internal 
 * Determines if a position is a candidate for automatic semicolon insertion.
 * @param pos The position to check.
 * @param context The context node at the position.
 * @param sourceFile The source file containing the position.
 */
export function positionIsASICandidate(pos: number, context: Node, sourceFile: SourceFileLike): boolean {
    const contextAncestor = findAncestor(context, ancestor => {
        if (ancestor.end !== pos) {
            return "quit";
        }
        return syntaxMayBeASICandidate(ancestor.kind);
    });

    return !!contextAncestor && nodeIsASICandidate(contextAncestor, sourceFile);
}

/** 
 * @internal
 * Determines whether a source file probably uses semicolons based on the presence or absence of semicolons in a sample of statements.
 * Analyzes up to a fixed number of statements to make this determination.
 * @param sourceFile The source file to analyze.
 */
export function probablyUsesSemicolons(sourceFile: SourceFile): boolean {
    let withSemicolon = 0;
    let withoutSemicolon = 0;
    const nStatementsToObserve = 5;
    forEachChild(sourceFile, function visit(node): boolean | undefined {
        if (syntaxRequiresTrailingSemicolonOrASI(node.kind)) {
            const lastToken = node.getLastToken(sourceFile);
            if (lastToken?.kind === SyntaxKind.SemicolonToken) {
                withSemicolon++;
            }
            else {
                withoutSemicolon++;
            }
        }
        else if (syntaxRequiresTrailingCommaOrSemicolonOrASI(node.kind)) {
            const lastToken = node.getLastToken(sourceFile);
            if (lastToken?.kind === SyntaxKind.SemicolonToken) {
                withSemicolon++;
            }
            else if (lastToken && lastToken.kind !== SyntaxKind.CommaToken) {
                const lastTokenLine = getLineAndCharacterOfPosition(sourceFile, lastToken.getStart(sourceFile)).line;
                const nextTokenLine = getLineAndCharacterOfPosition(sourceFile, getSpanOfTokenAtPosition(sourceFile, lastToken.end).start).line;
                // Avoid counting missing semicolon in single-line objects:
                // `function f(p: { x: string /*no semicolon here is insignificant*/ }) {`
                if (lastTokenLine !== nextTokenLine) {
                    withoutSemicolon++;
                }
            }
        }

        if (withSemicolon + withoutSemicolon >= nStatementsToObserve) {
            return true;
        }

        return forEachChild(node, visit);
    });

    // One statement missing a semicolon isn't sufficient evidence to say the user
    // doesn't want semicolons, because they may not even be done writing that statement.
    if (withSemicolon === 0 && withoutSemicolon <= 1) {
        return true;
    }

    // If even 2/5 places have a semicolon, the user probably wants semicolons
    return withSemicolon / withoutSemicolon > 1 / nStatementsToObserve;
}

/** 
 * @internal 
 * Tries to get the list of directories from the host for the specified directory name.
 * @param host The host providing the getDirectories method.
 * @param directoryName The name of the directory to retrieve subdirectories for.
 */
export function tryGetDirectories(host: Pick<LanguageServiceHost, "getDirectories">, directoryName: string): string[] {
    return tryIOAndConsumeErrors(host, host.getDirectories, directoryName) || [];
}

/** 
 * @internal 
 * Tries to read the contents of a directory using the provided host.
 * @param host The host providing the readDirectory method.
 * @param path The path of the directory to read.
 * @param extensions Optional file extensions to include.
 * @param exclude Optional patterns to exclude.
 * @param include Optional patterns to include.
 */
export function tryReadDirectory(host: Pick<LanguageServiceHost, "readDirectory">, path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[]): readonly string[] {
    return tryIOAndConsumeErrors(host, host.readDirectory, path, extensions, exclude, include) || emptyArray;
}

/** 
 * @internal 
 * Tries to check if a file exists at the given path using the provided host.
 * @param host - The host object with a fileExists method.
 * @param path - The path of the file to check.
 */
export function tryFileExists(host: Pick<LanguageServiceHost, "fileExists">, path: string): boolean {
    return tryIOAndConsumeErrors(host, host.fileExists, path);
}

/** 
 * @internal 
 * Tries to determine if a directory exists at the given path using the provided host.
 * @param host The language service host used to check for the directory.
 * @param path The path of the directory to check.
 */
export function tryDirectoryExists(host: LanguageServiceHost, path: string): boolean {
    return tryAndIgnoreErrors(() => directoryProbablyExists(path, host)) || false;
}

/** 
 * Tries to execute the provided callback and returns its result. 
 * If an error occurs during execution, it returns undefined.
 * @param cb The callback function to execute.
 * @returns The result of the callback or undefined if an error occurs.
 * @internal 
 */
export function tryAndIgnoreErrors<T>(cb: () => T): T | undefined {
    try {
        return cb();
    }
    catch {
        return undefined;
    }
}

function tryIOAndConsumeErrors<T>(host: unknown, toApply: ((...a: any[]) => T) | undefined, ...args: any[]) {
    return tryAndIgnoreErrors(() => toApply && toApply.apply(host, args));
}

/** 
 * @internal 
 * Finds all package.json files in the directory tree starting from the given directory.
 * 
 * @param startDirectory The directory to start searching from.
 * @param host The language service host used to check file existence.
 */
export function findPackageJsons(startDirectory: string, host: LanguageServiceHost): string[] {
    const paths: string[] = [];
    forEachAncestorDirectoryStoppingAtGlobalCache(
        host,
        startDirectory,
        ancestor => {
            const currentConfigPath = combinePaths(ancestor, "package.json");
            if (tryFileExists(host, currentConfigPath)) {
                paths.push(currentConfigPath);
            }
        },
    );
    return paths;
}

/** 
 * @internal 
 * Finds the nearest package.json file in the directory or its ancestors, stopping at the global cache or node_modules.
 * @param directory The starting directory to search from.
 * @param host The LanguageServiceHost used to check for file existence.
 * @returns The path to the package.json file if found, otherwise undefined.
 */
export function findPackageJson(directory: string, host: LanguageServiceHost): string | undefined {
    let packageJson: string | undefined;
    forEachAncestorDirectoryStoppingAtGlobalCache(
        host,
        directory,
        ancestor => {
            if (ancestor === "node_modules") return true;
            packageJson = findConfigFile(ancestor, f => tryFileExists(host, f), "package.json");
            if (packageJson) {
                return true; // break out
            }
        },
    );
    return packageJson;
}

function getPackageJsonsVisibleToFile(fileName: string, host: LanguageServiceHost): readonly ProjectPackageJsonInfo[] {
    if (!host.fileExists) {
        return [];
    }

    const packageJsons: ProjectPackageJsonInfo[] = [];
    forEachAncestorDirectoryStoppingAtGlobalCache(
        host,
        getDirectoryPath(fileName),
        ancestor => {
            const packageJsonFileName = combinePaths(ancestor, "package.json");
            if (host.fileExists(packageJsonFileName)) {
                const info = createPackageJsonInfo(packageJsonFileName, host);
                if (info) {
                    packageJsons.push(info);
                }
            }
        },
    );

    return packageJsons;
}

/** 
 * @internal
 * Creates information about a package.json file, including its dependencies and their groups.
 * 
 * @param fileName The name of the package.json file.
 * @param host An object with a readFile method to read the file content.
 * @returns An object containing parsed dependency information or undefined if the file cannot be read.
 */
export function createPackageJsonInfo(fileName: string, host: { readFile?(fileName: string): string | undefined; }): ProjectPackageJsonInfo | undefined {
    if (!host.readFile) {
        return undefined;
    }

    type PackageJsonRaw = Record<typeof dependencyKeys[number], Record<string, string> | undefined>;
    const dependencyKeys = ["dependencies", "devDependencies", "optionalDependencies", "peerDependencies"] as const;
    const stringContent = host.readFile(fileName) || "";
    const content = tryParseJson(stringContent) as PackageJsonRaw | undefined;
    const info: Pick<ProjectPackageJsonInfo, typeof dependencyKeys[number]> = {};
    if (content) {
        for (const key of dependencyKeys) {
            const dependencies = content[key];
            if (!dependencies) {
                continue;
            }
            const dependencyMap = new Map<string, string>();
            for (const packageName in dependencies) {
                dependencyMap.set(packageName, dependencies[packageName]);
            }
            info[key] = dependencyMap;
        }
    }

    const dependencyGroups = [
        [PackageJsonDependencyGroup.Dependencies, info.dependencies],
        [PackageJsonDependencyGroup.DevDependencies, info.devDependencies],
        [PackageJsonDependencyGroup.OptionalDependencies, info.optionalDependencies],
        [PackageJsonDependencyGroup.PeerDependencies, info.peerDependencies],
    ] as const;

    return {
        ...info,
        parseable: !!content,
        fileName,
        get,
        has(dependencyName, inGroups) {
            return !!get(dependencyName, inGroups);
        },
    };

    function get(dependencyName: string, inGroups = PackageJsonDependencyGroup.All) {
        for (const [group, deps] of dependencyGroups) {
            if (deps && (inGroups & group)) {
                const dep = deps.get(dependencyName);
                if (dep !== undefined) {
                    return dep;
                }
            }
        }
    }
}

/** @internal */
export interface PackageJsonImportFilter {
    allowsImportingAmbientModule: (moduleSymbol: Symbol, moduleSpecifierResolutionHost: ModuleSpecifierResolutionHost) => boolean;
    getSourceFileInfo: (sourceFile: SourceFile, moduleSpecifierResolutionHost: ModuleSpecifierResolutionHost) => { importable: boolean; packageName?: string; };
    /**
     * Use for a specific module specifier that has already been resolved.
     * Use `allowsImportingAmbientModule` or `allowsImportingSourceFile` to resolve
     * the best module specifier for a given module _and_ determine if it's importable.
     */
    allowsImportingSpecifier: (moduleSpecifier: string) => boolean;
}

/** 
 * @internal
 * Creates a filter for determining whether a package.json file allows importing specific modules or specifiers.
 * 
 * @param fromFile - The source file or future source file from which imports are being resolved.
 * @param preferences - User preferences for module resolution.
 * @param host - The language service host providing access to package.json files and other utilities.
 * 
 * @returns An object with methods to check if importing ambient modules, specific specifiers, or source files is allowed.
 */
export function createPackageJsonImportFilter(fromFile: SourceFile | FutureSourceFile, preferences: UserPreferences, host: LanguageServiceHost): PackageJsonImportFilter {
    const packageJsons = (
        (host.getPackageJsonsVisibleToFile && host.getPackageJsonsVisibleToFile(fromFile.fileName)) || getPackageJsonsVisibleToFile(fromFile.fileName, host)
    ).filter(p => p.parseable);

    let usesNodeCoreModules: boolean | undefined;
    let ambientModuleCache: Map<Symbol, boolean> | undefined;
    let sourceFileCache: Map<SourceFile, { importable: boolean; packageName?: string; }> | undefined;
    return {
        allowsImportingAmbientModule,
        getSourceFileInfo,
        allowsImportingSpecifier,
    };

    function moduleSpecifierIsCoveredByPackageJson(specifier: string) {
        const packageName = getNodeModuleRootSpecifier(specifier);
        for (const packageJson of packageJsons) {
            if (packageJson.has(packageName) || packageJson.has(getTypesPackageName(packageName))) {
                return true;
            }
        }
        return false;
    }

    function allowsImportingAmbientModule(moduleSymbol: Symbol, moduleSpecifierResolutionHost: ModuleSpecifierResolutionHost): boolean {
        if (!packageJsons.length || !moduleSymbol.valueDeclaration) {
            return true;
        }

        if (!ambientModuleCache) {
            ambientModuleCache = new Map();
        }
        else {
            const cached = ambientModuleCache.get(moduleSymbol);
            if (cached !== undefined) {
                return cached;
            }
        }

        const declaredModuleSpecifier = stripQuotes(moduleSymbol.getName());
        if (isAllowedCoreNodeModulesImport(declaredModuleSpecifier)) {
            ambientModuleCache.set(moduleSymbol, true);
            return true;
        }

        const declaringSourceFile = moduleSymbol.valueDeclaration.getSourceFile();
        const declaringNodeModuleName = getNodeModulesPackageNameFromFileName(declaringSourceFile.fileName, moduleSpecifierResolutionHost);
        if (typeof declaringNodeModuleName === "undefined") {
            ambientModuleCache.set(moduleSymbol, true);
            return true;
        }

        const result = moduleSpecifierIsCoveredByPackageJson(declaringNodeModuleName) ||
            moduleSpecifierIsCoveredByPackageJson(declaredModuleSpecifier);
        ambientModuleCache.set(moduleSymbol, result);
        return result;
    }

    function getSourceFileInfo(sourceFile: SourceFile, moduleSpecifierResolutionHost: ModuleSpecifierResolutionHost): { importable: boolean; packageName?: string; } {
        if (!packageJsons.length) {
            return { importable: true, packageName: undefined };
        }

        if (!sourceFileCache) {
            sourceFileCache = new Map();
        }
        else {
            const cached = sourceFileCache.get(sourceFile);
            if (cached !== undefined) {
                return cached;
            }
        }

        const packageName = getNodeModulesPackageNameFromFileName(sourceFile.fileName, moduleSpecifierResolutionHost);
        if (!packageName) {
            const result = { importable: true, packageName };
            sourceFileCache.set(sourceFile, result);
            return result;
        }

        const importable = moduleSpecifierIsCoveredByPackageJson(packageName);
        const result = { importable, packageName };
        sourceFileCache.set(sourceFile, result);
        return result;
    }

    function allowsImportingSpecifier(moduleSpecifier: string) {
        if (!packageJsons.length || isAllowedCoreNodeModulesImport(moduleSpecifier)) {
            return true;
        }
        if (pathIsRelative(moduleSpecifier) || isRootedDiskPath(moduleSpecifier)) {
            return true;
        }
        return moduleSpecifierIsCoveredByPackageJson(moduleSpecifier);
    }

    function isAllowedCoreNodeModulesImport(moduleSpecifier: string) {
        // If we're in JavaScript, it can be difficult to tell whether the user wants to import
        // from Node core modules or not. We can start by seeing if the user is actually using
        // any node core modules, as opposed to simply having @types/node accidentally as a
        // dependency of a dependency.
        if (isFullSourceFile(fromFile) && isSourceFileJS(fromFile) && nodeCoreModules.has(moduleSpecifier)) {
            if (usesNodeCoreModules === undefined) {
                usesNodeCoreModules = consumesNodeCoreModules(fromFile);
            }
            if (usesNodeCoreModules) {
                return true;
            }
        }
        return false;
    }

    function getNodeModulesPackageNameFromFileName(importedFileName: string, moduleSpecifierResolutionHost: ModuleSpecifierResolutionHost): string | undefined {
        if (!importedFileName.includes("node_modules")) {
            return undefined;
        }
        const specifier = moduleSpecifiers.getNodeModulesPackageName(
            host.getCompilationSettings(),
            fromFile,
            importedFileName,
            moduleSpecifierResolutionHost,
            preferences,
        );

        if (!specifier) {
            return undefined;
        }
        // Paths here are not node_modules, so we don't care about them;
        // returning anything will trigger a lookup in package.json.
        if (!pathIsRelative(specifier) && !isRootedDiskPath(specifier)) {
            return getNodeModuleRootSpecifier(specifier);
        }
    }

    function getNodeModuleRootSpecifier(fullSpecifier: string): string {
        const components = getPathComponents(getPackageNameFromTypesPackageName(fullSpecifier)).slice(1);
        // Scoped packages
        if (startsWith(components[0], "@")) {
            return `${components[0]}/${components[1]}`;
        }
        return components[0];
    }
}

/** 
 * @internal
 * Determines if the given source file imports any Node.js core modules.
 * @param sourceFile The source file to check for Node.js core module imports.
 */
export function consumesNodeCoreModules(sourceFile: SourceFile): boolean {
    return some(sourceFile.imports, ({ text }) => nodeCoreModules.has(text));
}

/** 
 * @internal 
 * Determines if the given file or directory path is inside a "node_modules" directory.
 * @param fileOrDirectory The path of the file or directory to check.
 */
export function isInsideNodeModules(fileOrDirectory: string): boolean {
    return contains(getPathComponents(fileOrDirectory), "node_modules");
}

function isDiagnosticWithLocation(diagnostic: Diagnostic): diagnostic is DiagnosticWithLocation {
    return diagnostic.file !== undefined && diagnostic.start !== undefined && diagnostic.length !== undefined;
}

/** 
 * @internal 
 * Finds a diagnostic for a given node within a sorted list of file diagnostics.
 * 
 * @param node - The node for which to find the diagnostic.
 * @param sortedFileDiagnostics - The sorted list of diagnostics to search within.
 * @returns The diagnostic associated with the node, or undefined if none is found.
 */
export function findDiagnosticForNode(node: Node, sortedFileDiagnostics: readonly Diagnostic[]): DiagnosticWithLocation | undefined {
    const span: Partial<TextSpan> = createTextSpanFromNode(node);
    const index = binarySearchKey(sortedFileDiagnostics, span, identity, compareTextSpans);
    if (index >= 0) {
        const diagnostic = sortedFileDiagnostics[index];
        Debug.assertEqual(diagnostic.file, node.getSourceFile(), "Diagnostics proided to 'findDiagnosticForNode' must be from a single SourceFile");
        return cast(diagnostic, isDiagnosticWithLocation);
    }
}

/** 
 * @internal
 * Retrieves diagnostics within a specified span from a sorted list of file diagnostics.
 * 
 * @param span The span within which to retrieve diagnostics.
 * @param sortedFileDiagnostics The sorted list of diagnostics to search within.
 * @returns An array of diagnostics with location information that fall within the specified span.
 */
export function getDiagnosticsWithinSpan(span: TextSpan, sortedFileDiagnostics: readonly Diagnostic[]): readonly DiagnosticWithLocation[] {
    let index = binarySearchKey(sortedFileDiagnostics, span.start, diag => diag.start, compareValues);
    if (index < 0) {
        index = ~index;
    }
    while (sortedFileDiagnostics[index - 1]?.start === span.start) {
        index--;
    }

    const result: DiagnosticWithLocation[] = [];
    const end = textSpanEnd(span);
    while (true) {
        const diagnostic = tryCast(sortedFileDiagnostics[index], isDiagnosticWithLocation);
        if (!diagnostic || diagnostic.start > end) {
            break;
        }
        if (textSpanContainsTextSpan(span, diagnostic)) {
            result.push(diagnostic);
        }
        index++;
    }

    return result;
}

/**
 * @internal
 * Gets the span for the refactor context.
 * @param startPosition - The starting position of the refactor context.
 * @param endPosition - The ending position of the refactor context. If undefined, the startPosition is used.
 */
export function getRefactorContextSpan({ startPosition, endPosition }: RefactorContext): TextSpan {
    return createTextSpanFromBounds(startPosition, endPosition === undefined ? startPosition : endPosition);
}

/** 
 * @internal 
 * Finds the expression within a source file that matches a given text span and could be associated with a fixable error.
 * 
 * @param sourceFile The source file to search within.
 * @param span The text span to match against.
 * @returns The matching expression, or undefined if none is found.
 */
export function getFixableErrorSpanExpression(sourceFile: SourceFile, span: TextSpan): Expression | undefined {
    const token = getTokenAtPosition(sourceFile, span.start);
    // Checker has already done work to determine that await might be possible, and has attached
    // related info to the node, so start by finding the expression that exactly matches up
    // with the diagnostic range.
    const expression = findAncestor(token, node => {
        if (node.getStart(sourceFile) < span.start || node.getEnd() > textSpanEnd(span)) {
            return "quit";
        }
        return isExpression(node) && textSpansEqual(span, createTextSpanFromNode(node, sourceFile));
    }) as Expression | undefined;

    return expression;
}

/**
 * If the provided value is an array, the mapping function is applied to each element; otherwise, the mapping function is applied
 * to the provided value itself.
 *
 * @internal
 */
export function mapOneOrMany<T, U>(valueOrArray: T | readonly T[], f: (x: T, i: number) => U): U | U[];
/** @internal */
export function mapOneOrMany<T, U>(valueOrArray: T | readonly T[] | undefined, f: (x: T, i: number) => U): U | U[] | undefined;
/** @internal */
export function mapOneOrMany<T, U>(valueOrArray: T | readonly T[], f: (x: T, i: number) => U, resultSelector: (x: U[]) => U): U;
/** @internal */
export function mapOneOrMany<T, U>(valueOrArray: T | readonly T[] | undefined, f: (x: T, i: number) => U, resultSelector: (x: U[]) => U): U | undefined;
/** 
 * @internal
 * Maps a value or an array of values using the provided mapping function.
 * If the input is an array, applies the result selector to the mapped array.
 * 
 * @param valueOrArray The value or array of values to map.
 * @param f The mapping function to apply to each element.
 * @param resultSelector A function to transform the mapped array into a single value or array of values. Defaults to the identity function.
 */
export function mapOneOrMany<T, U>(valueOrArray: T | readonly T[] | undefined, f: (x: T, i: number) => U, resultSelector: (x: U[]) => U | U[] = identity): U | U[] | undefined {
    return valueOrArray ? isArray(valueOrArray) ? resultSelector(map(valueOrArray, f)) : f(valueOrArray, 0) : undefined;
}

/**
 * If the provided value is an array, the first element of the array is returned; otherwise, the provided value is returned instead.
 *
 * @param valueOrArray The value or array to process.
 * @internal
 */
export function firstOrOnly<T>(valueOrArray: T | readonly T[]): T {
    return isArray(valueOrArray) ? first(valueOrArray) : valueOrArray;
}

/**
 * If a type checker and multiple files are available, consider using `forEachNameOfDefaultExport`
 * instead, which searches for names of re-exported defaults/namespaces in target files.
 * 
 * Gets the name for an exported symbol. Handles default exports by deriving the name from the declaration
 * or converting the filename to camelCase if necessary.
 * 
 * @param symbol The symbol for which to get the exported name.
 * @param scriptTarget The script target to use for generating valid identifiers.
 * @param preferCapitalized Whether to prefer capitalized names for default exports.
 * @internal
 */
export function getNameForExportedSymbol(symbol: Symbol, scriptTarget: ScriptTarget | undefined, preferCapitalized?: boolean): string {
    if (symbol.escapedName === InternalSymbolName.ExportEquals || symbol.escapedName === InternalSymbolName.Default) {
        // Names for default exports:
        // - export default foo => foo
        // - export { foo as default } => foo
        // - export default 0 => filename converted to camelCase
        return getDefaultLikeExportNameFromDeclaration(symbol)
            || moduleSymbolToValidIdentifier(getSymbolParentOrFail(symbol), scriptTarget, !!preferCapitalized);
    }
    return symbol.name;
}

/**
 * Retrieves the default-like export name from a given symbol's declaration, if available.
 * Considers "export default", "export { ~ as default }", and other cases.
 * If a type checker and multiple files are available, consider using `forEachNameOfDefaultExport`
 * instead, which searches for names of re-exported defaults/namespaces in target files.
 * @param symbol The symbol to retrieve the default-like export name from.
 * @internal
 */
export function getDefaultLikeExportNameFromDeclaration(symbol: Symbol): string | undefined {
    return firstDefined(symbol.declarations, d => {
        // "export default" in this case. See `ExportAssignment`for more details.
        if (isExportAssignment(d)) {
            return tryCast(skipOuterExpressions(d.expression), isIdentifier)?.text;
        }
        // "export { ~ as default }"
        if (isExportSpecifier(d) && d.symbol.flags === SymbolFlags.Alias) {
            return tryCast(d.propertyName, isIdentifier)?.text;
        }
        // GH#52694
        const name = tryCast(getNameOfDeclaration(d), isIdentifier)?.text;
        if (name) {
            return name;
        }
        if (symbol.parent && !isExternalModuleSymbol(symbol.parent)) {
            return symbol.parent.getName();
        }
    });
}

function getSymbolParentOrFail(symbol: Symbol) {
    return Debug.checkDefined(
        symbol.parent,
        `Symbol parent was undefined. Flags: ${Debug.formatSymbolFlags(symbol.flags)}. ` +
            `Declarations: ${
                symbol.declarations?.map(d => {
                    const kind = Debug.formatSyntaxKind(d.kind);
                    const inJS = isInJSFile(d);
                    const { expression } = d as any;
                    return (inJS ? "[JS]" : "") + kind + (expression ? ` (expression: ${Debug.formatSyntaxKind(expression.kind)})` : "");
                }).join(", ")
            }.`,
    );
}

/** 
 * @internal 
 * Converts a module symbol to a valid identifier by removing the file extension, stripping quotes, 
 * and optionally capitalizing the result. 
 * 
 * @param moduleSymbol - The symbol representing the module.
 * @param target - The script target, used for compatibility.
 * @param forceCapitalize - Whether to force capitalization of the identifier.
 */
export function moduleSymbolToValidIdentifier(moduleSymbol: Symbol, target: ScriptTarget | undefined, forceCapitalize: boolean): string {
    return moduleSpecifierToValidIdentifier(removeFileExtension(stripQuotes(moduleSymbol.name)), target, forceCapitalize);
}

/** 
 * @internal 
 * Converts a module specifier string into a valid identifier.
 * Ensures the resulting identifier is valid and not a contextual keyword.
 * If the first character is invalid, it is skipped or adjusted.
 * Capitalizes the first character if forceCapitalize is true.
 * Ensures the result is not empty by appending an underscore if necessary.
 * 
 * @param moduleSpecifier The module specifier string to convert.
 * @param target The script target to determine valid identifier characters.
 * @param forceCapitalize Whether to force capitalization of the first character.
 */
export function moduleSpecifierToValidIdentifier(moduleSpecifier: string, target: ScriptTarget | undefined, forceCapitalize?: boolean): string {
    const baseName = getBaseFileName(removeSuffix(removeFileExtension(moduleSpecifier), "/index"));
    let res = "";
    let lastCharWasValid = true;
    const firstCharCode = baseName.charCodeAt(0);
    if (isIdentifierStart(firstCharCode, target)) {
        res += String.fromCharCode(firstCharCode);
        if (forceCapitalize) {
            res = res.toUpperCase();
        }
    }
    else {
        lastCharWasValid = false;
    }
    for (let i = 1; i < baseName.length; i++) {
        const ch = baseName.charCodeAt(i);
        const isValid = isIdentifierPart(ch, target);
        if (isValid) {
            let char = String.fromCharCode(ch);
            if (!lastCharWasValid) {
                char = char.toUpperCase();
            }
            res += char;
        }
        lastCharWasValid = isValid;
    }
    // Need `|| "_"` to ensure result isn't empty.
    return !isStringANonContextualKeyword(res) ? res || "_" : `_${res}`;
}

/**
 * Useful to check whether a string contains another string at a specific index
 * without allocating another string or traversing the entire contents of the outer string.
 *
 * This function is useful in place of either of the following:
 *
 * ```ts
 * // Allocates
 * haystack.substr(startIndex, needle.length) === needle
 *
 * // Full traversal
 * haystack.indexOf(needle, startIndex) === startIndex
 * ```
 *
 * @param haystack The string that potentially contains `needle`.
 * @param needle The string whose content might sit within `haystack`.
 * @param startIndex The index within `haystack` to start searching for `needle`.
 * @returns Whether `needle` is found at the specified index in `haystack`.
 *
 * @internal
 */
export function stringContainsAt(haystack: string, needle: string, startIndex: number): boolean {
    const needleLength = needle.length;
    if (needleLength + startIndex > haystack.length) {
        return false;
    }
    for (let i = 0; i < needleLength; i++) {
        if (needle.charCodeAt(i) !== haystack.charCodeAt(i + startIndex)) return false;
    }
    return true;
}

/** 
 * @internal 
 * Determines if a given name starts with an underscore.
 * @param name The name to check.
 */
export function startsWithUnderscore(name: string): boolean {
    return name.charCodeAt(0) === CharacterCodes._;
}

/** 
 * @internal 
 * Determines if the given declaration is marked as deprecated.
 * @param decl The declaration to check.
 */
export function isDeprecatedDeclaration(decl: Declaration): boolean {
    return !!(getCombinedNodeFlagsAlwaysIncludeJSDoc(decl) & ModifierFlags.Deprecated);
}

/** 
 * @internal 
 * Determines whether to use URI-style node core modules based on the imports in the given file and the program's settings.
 * @param file The source file to analyze.
 * @param program The program containing the source file.
 */
export function shouldUseUriStyleNodeCoreModules(file: SourceFile | FutureSourceFile, program: Program): boolean | undefined {
    let decisionFromFile;
    for (const node of file.imports) {
        if (nodeCoreModules.has(node.text) && !exclusivelyPrefixedNodeCoreModules.has(node.text)) {
            if (startsWith(node.text, "node:")) {
                return true;
            }
            else {
                decisionFromFile = false;
            }
        }
    }
    return decisionFromFile ?? program.usesUriStyleNodeCoreModules;
}

/** 
 * @internal 
 * Determines the kind of newline based on the provided newline character.
 * @param newLineCharacter The character representing a newline.
 * @returns The corresponding NewLineKind.
 */
export function getNewLineKind(newLineCharacter: string): NewLineKind {
    return newLineCharacter === "\n" ? NewLineKind.LineFeed : NewLineKind.CarriageReturnLineFeed;
}

/** @internal */
export type DiagnosticOrDiagnosticAndArguments = DiagnosticMessage | DiagnosticAndArguments;
/** 
 * Converts a diagnostic or diagnostic with arguments into a string.
 * If the input is an array, formats the string using the diagnostic message and its arguments.
 * Otherwise, retrieves the locale-specific message for the diagnostic.
 */
export function diagnosticToString(diag: DiagnosticOrDiagnosticAndArguments): string {
    return isArray(diag)
        ? formatStringFromArgs(getLocaleSpecificMessage(diag[0]), diag.slice(1) as DiagnosticArguments)
        : getLocaleSpecificMessage(diag);
}

/**
 * Get format code settings for a code writing context (e.g. when formatting text changes or completions code).
 *
 * @param options - The formatting options provided in the context.
 * @param sourceFile - The source file to analyze for determining semicolon preferences.
 * @internal
 */
export function getFormatCodeSettingsForWriting({ options }: formatting.FormatContext, sourceFile: SourceFile): FormatCodeSettings {
    const shouldAutoDetectSemicolonPreference = !options.semicolons || options.semicolons === SemicolonPreference.Ignore;
    const shouldRemoveSemicolons = options.semicolons === SemicolonPreference.Remove || shouldAutoDetectSemicolonPreference && !probablyUsesSemicolons(sourceFile);
    return {
        ...options,
        semicolons: shouldRemoveSemicolons ? SemicolonPreference.Remove : SemicolonPreference.Ignore,
    };
}

/** 
 * @internal 
 * Determines if the given JSX mode requires an explicit import of React or React Native.
 * @param jsx - The JSX emit mode to check.
 */
export function jsxModeNeedsExplicitImport(jsx: JsxEmit | undefined): jsx is JsxEmit.React | JsxEmit.ReactNative {
    return jsx === JsxEmit.React || jsx === JsxEmit.ReactNative;
}

/** 
 * @internal 
 * Determines if a source file is from a library.
 * @param program The program containing the source file.
 * @param node The source file to check.
 */
export function isSourceFileFromLibrary(program: Program, node: SourceFile): boolean {
    return program.isSourceFileFromExternalLibrary(node) || program.isSourceFileDefaultLibrary(node);
}

/** @internal */
export interface CaseClauseTracker {
    addValue(value: string | number): void;
    hasValue(value: string | number | PseudoBigInt): boolean;
}

/** 
 * @internal
 * Creates a tracker for case clauses to manage and check existing values.
 * 
 * @param checker The type checker used to retrieve symbol and constant value information.
 * @param clauses The list of case or default clauses to initialize the tracker with.
 */
export function newCaseClauseTracker(checker: TypeChecker, clauses: readonly (CaseClause | DefaultClause)[]): CaseClauseTracker {
    const existingStrings = new Set<string>();
    const existingNumbers = new Set<number>();
    const existingBigInts = new Set<string>();

    for (const clause of clauses) {
        if (!isDefaultClause(clause)) {
            const expression = skipParentheses(clause.expression);
            if (isLiteralExpression(expression)) {
                switch (expression.kind) {
                    case SyntaxKind.NoSubstitutionTemplateLiteral:
                    case SyntaxKind.StringLiteral:
                        existingStrings.add(expression.text);
                        break;
                    case SyntaxKind.NumericLiteral:
                        existingNumbers.add(parseInt(expression.text));
                        break;
                    case SyntaxKind.BigIntLiteral:
                        const parsedBigInt = parseBigInt(endsWith(expression.text, "n") ? expression.text.slice(0, -1) : expression.text);
                        if (parsedBigInt) {
                            existingBigInts.add(pseudoBigIntToString(parsedBigInt));
                        }
                        break;
                }
            }
            else {
                const symbol = checker.getSymbolAtLocation(clause.expression);
                if (symbol && symbol.valueDeclaration && isEnumMember(symbol.valueDeclaration)) {
                    const enumValue = checker.getConstantValue(symbol.valueDeclaration);
                    if (enumValue !== undefined) {
                        addValue(enumValue);
                    }
                }
            }
        }
    }

    return {
        addValue,
        hasValue,
    };

    function addValue(value: string | number) {
        switch (typeof value) {
            case "string":
                existingStrings.add(value);
                break;
            case "number":
                existingNumbers.add(value);
        }
    }

    function hasValue(value: string | number | PseudoBigInt): boolean {
        switch (typeof value) {
            case "string":
                return existingStrings.has(value);
            case "number":
                return existingNumbers.has(value);
            case "object":
                return existingBigInts.has(pseudoBigIntToString(value));
        }
    }
}

/** 
 * @internal
 * Determines whether a file should use JavaScript `require` syntax based on its extension, compiler options, and implied module format.
 * 
 * @param file The source file or file name to check.
 * @param program The program instance containing the file.
 * @param host The language service host providing file system information.
 * @param preferRequire Optional flag indicating a preference for `require` syntax.
 * @returns `true` if the file should use `require` syntax, `false` if it should not, or `undefined` if it cannot be determined.
 */
export function fileShouldUseJavaScriptRequire(file: SourceFile | string, program: Program, host: LanguageServiceHost, preferRequire?: boolean): boolean | undefined {
    const fileName = typeof file === "string" ? file : file.fileName;
    if (!hasJSFileExtension(fileName)) {
        return false;
    }
    const compilerOptions = typeof file === "string" ? program.getCompilerOptions() : program.getCompilerOptionsForFile(file);
    const moduleKind = getEmitModuleKind(compilerOptions);
    const sourceFileLike = typeof file === "string" ? {
        fileName: file,
        impliedNodeFormat: getImpliedNodeFormatForFile(toPath(file, host.getCurrentDirectory(), hostGetCanonicalFileName(host)), program.getPackageJsonInfoCache?.(), host, compilerOptions),
    } : file;
    const impliedNodeFormat = getImpliedNodeFormatForEmitWorker(sourceFileLike, compilerOptions);

    if (impliedNodeFormat === ModuleKind.ESNext) {
        return false;
    }
    if (impliedNodeFormat === ModuleKind.CommonJS) {
        // Since we're in a JS file, assume the user is writing the JS that will run
        // (i.e., assume `noEmit`), so a CJS-format file should just have require
        // syntax, rather than imports that will be downleveled to `require`.
        return true;
    }
    if (compilerOptions.verbatimModuleSyntax && moduleKind === ModuleKind.CommonJS) {
        // Using ESM syntax under these options would result in an error.
        return true;
    }
    if (compilerOptions.verbatimModuleSyntax && emitModuleKindIsNonNodeESM(moduleKind)) {
        return false;
    }

    // impliedNodeFormat is undefined and `verbatimModuleSyntax` is off (or in an invalid combo)
    // Use heuristics from existing code
    if (typeof file === "object") {
        if (file.commonJsModuleIndicator) {
            return true;
        }
        if (file.externalModuleIndicator) {
            return false;
        }
    }
    return preferRequire;
}

/**
 * Determines if a node is block-like.
 * A block-like node can be a Block, SourceFile, ModuleBlock, or CaseClause.
 * @param node The node to check.
 */
export function isBlockLike(node: Node): node is BlockLike {
    switch (node.kind) {
        case SyntaxKind.Block:
        case SyntaxKind.SourceFile:
        case SyntaxKind.ModuleBlock:
        case SyntaxKind.CaseClause:
            return true;
        default:
            return false;
    }
}

/** 
 * @internal 
 * Creates a FutureSourceFile object for the given file name and module indicator.
 * 
 * @param fileName The name of the file to create the FutureSourceFile for.
 * @param syntaxModuleIndicator The module kind indicator, either ESNext or CommonJS, or undefined.
 * @param program The program instance to retrieve package JSON info and compiler options.
 * @param moduleResolutionHost The host used for module resolution.
 */
export function createFutureSourceFile(fileName: string, syntaxModuleIndicator: ModuleKind.ESNext | ModuleKind.CommonJS | undefined, program: Program, moduleResolutionHost: ModuleResolutionHost): FutureSourceFile {
    const result = getImpliedNodeFormatForFileWorker(fileName, program.getPackageJsonInfoCache?.(), moduleResolutionHost, program.getCompilerOptions());
    let impliedNodeFormat, packageJsonScope;
    if (typeof result === "object") {
        impliedNodeFormat = result.impliedNodeFormat;
        packageJsonScope = result.packageJsonScope;
    }
    return {
        path: toPath(fileName, program.getCurrentDirectory(), program.getCanonicalFileName),
        fileName,
        externalModuleIndicator: syntaxModuleIndicator === ModuleKind.ESNext ? true : undefined,
        commonJsModuleIndicator: syntaxModuleIndicator === ModuleKind.CommonJS ? true : undefined,
        impliedNodeFormat,
        packageJsonScope,
        statements: emptyArray,
        imports: emptyArray,
    };
}
