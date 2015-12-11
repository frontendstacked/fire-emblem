<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>

<xsl:output method="text" media-type="application/json" />

<xsl:template match="/">
<xsl:text>[
</xsl:text>
    <xsl:apply-templates select="fe_spotpass" mode="weapons" />
<xsl:text>
]</xsl:text>
</xsl:template>

<xsl:key name="series" match="/fe_spotpass/purchaseable/row" use="series" />
<xsl:template match="fe_spotpass" mode="series">
    <xsl:for-each select="purchaseable/row[count(. | key('series', series)[1]) = 1]">
        <xsl:sort select="series_id" data-type="number" />
        <xsl:text>  { "key": "</xsl:text><xsl:value-of select="position()" />
        <xsl:text>", "name": "</xsl:text><xsl:value-of select="series" />
        <xsl:text>" }</xsl:text>
        <xsl:if test="not(position() = last())">
            <xsl:text>,
</xsl:text></xsl:if>
    </xsl:for-each>
</xsl:template>

<xsl:key name="character" match="/fe_spotpass/purchaseable/row" use="owner" />
<xsl:template match="fe_spotpass" mode="owners">
    <xsl:for-each select="purchaseable/row[count(. | key('character', owner)[1]) = 1]">
        <xsl:sort select="owner" />
        <xsl:text>  { "key": "</xsl:text><xsl:value-of select="position()" />
        <xsl:text>", "name": "</xsl:text><xsl:value-of select="owner" />
        <xsl:text>", "series": "</xsl:text><xsl:value-of select="series" />
        <xsl:text>" }</xsl:text>
        <xsl:if test="not(position() = last())">
            <xsl:text>,
</xsl:text></xsl:if>
    </xsl:for-each>
</xsl:template>

<xsl:key name="weapon" match="/fe_spotpass/purchaseable/row" use="name" />
<xsl:template match="fe_spotpass" mode="weapons">
    <xsl:for-each select="purchaseable/row[count(. | key('weapon', name)[1]) = 1]">
        <xsl:sort select="name" />
        <xsl:variable name="weapon" select="name" />
        <xsl:text>  { "key": "</xsl:text><xsl:value-of select="position()" />
        <xsl:text>", "name": "</xsl:text><xsl:value-of select="name" />
        <xsl:text>", "class": "</xsl:text><xsl:value-of select="class" />
        <xsl:text>", "rank": "</xsl:text><xsl:value-of select="rank" />
        <xsl:text>", "might": "</xsl:text><xsl:value-of select="might" />
        <xsl:text>", "hit": "</xsl:text><xsl:value-of select="hit" />
        <xsl:text>", "critical": "</xsl:text><xsl:value-of select="critical" />
        <xsl:text>", "range": "</xsl:text><xsl:value-of select="range" />
        <xsl:text>", "uses": "</xsl:text><xsl:value-of select="uses" />
        <xsl:text>", "price": "</xsl:text><xsl:value-of select="price" />
        <xsl:text>", "effects": "</xsl:text><xsl:value-of select="effects" />
        <xsl:text>", "owners": [</xsl:text><xsl:for-each select="/fe_spotpass/purchaseable/row[name=$weapon]">"<xsl:value-of select="owner" />"<xsl:if test="not(position() = last())">,</xsl:if></xsl:for-each>
        <xsl:text>] }</xsl:text>
        <xsl:if test="not(position() = last())">
            <xsl:text>,
</xsl:text></xsl:if>
    </xsl:for-each>
</xsl:template>

</xsl:stylesheet>
