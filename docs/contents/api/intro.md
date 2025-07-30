# 🧠 Artificial Intelligence API

A lightweight and extensible Java library for AI-related operations.  
Published on GitHub Packages for easy integration into your Maven or Gradle projects.

---

## 📦 Installation

### 🔧 Maven

```xml
<dependency>
  <groupId>io.github.mcengine</groupId>
  <artifactId>artificialintelligence-api</artifactId>
  <version>{version}</version>
</dependency>
```

### ⚙️ Gradle

#### Groovy DSL

**Short form**:
```groovy
implementation 'io.github.mcengine:artificialintelligence-api:{version}'
```

**Long form**:
```groovy
dependencies {
    implementation group: 'io.github.mcengine', name: 'artificialintelligence-api', version: '{version}'
}
```

#### Kotlin DSL

**Short form**:
```kotlin
implementation("io.github.mcengine:artificialintelligence-api:{version}")
```

**Long form**:
```kotlin
dependencies {
    implementation(group = "io.github.mcengine", name = "artificialintelligence-api", version = "{version}")
}
```

---

## 🛠 Repository Configuration (GitHub Packages)

Make sure to add GitHub Packages as a repository source:

<details>
<summary>📚 Maven</summary>

```xml
<repositories>
  <repository>
    <id>github</id>
    <url>https://maven.pkg.github.com/MCEngine-API/artificialintelligence</url>
  </repository>
</repositories>
```
</details>

<details>
<summary>📚 Gradle (Groovy)</summary>

```groovy
repositories {
    maven {
        url = uri("https://maven.pkg.github.com/MCEngine-API/artificialintelligence")
    }
}
```
</details>

<details>
<summary>📚 Gradle (Kotlin)</summary>

```kotlin
repositories {
    maven {
        url = uri("https://maven.pkg.github.com/MCEngine-API/artificialintelligence")
    }
}
```
</details>
