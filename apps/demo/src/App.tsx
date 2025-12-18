import { Button } from "@react-component-kit/ui";

function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Button Component Showcase</h1>

      {/* Color Schemes */}
      <section style={{ marginBottom: 40 }}>
        <h2>Color Schemes</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button colorScheme="primary">Primary</Button>
          <Button colorScheme="success">Success</Button>
          <Button colorScheme="danger">Danger</Button>
          <Button colorScheme="warning">Warning</Button>
          <Button colorScheme="info">Info</Button>
        </div>
      </section>

      {/* States */}
      <section style={{ marginBottom: 40 }}>
        <h2>States</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button colorScheme="primary">Default</Button>
          <Button colorScheme="primary" disabled>
            Disabled
          </Button>
          <Button colorScheme="primary" isPending>
            Loading...
          </Button>
        </div>
      </section>

      {/* Icons */}
      <section style={{ marginBottom: 40 }}>
        <h2>Icons</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button
            colorScheme="primary"
            icon={<span>⬅️</span>}
            iconPosition="left"
          >
            Left Icon
          </Button>
          <Button
            colorScheme="primary"
            icon={<span>➡️</span>}
            iconPosition="right"
          >
            Right Icon
          </Button>
          <Button
            colorScheme="success"
            icon={<span>✓</span>}
            label="Save"
          />
        </div>
      </section>

      {/* Button Types */}
      <section style={{ marginBottom: 40 }}>
        <h2>Button Types</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button type="button" colorScheme="primary">
            Button
          </Button>
          <Button type="submit" colorScheme="success">
            Submit
          </Button>
          <Button type="reset" colorScheme="warning">
            Reset
          </Button>
        </div>
      </section>

      {/* Tooltip */}
      <section style={{ marginBottom: 40 }}>
        <h2>Tooltip</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button colorScheme="primary" tooltip="Klikni na mě!">
            Tooltip Button
          </Button>
          <Button colorScheme="info" tooltip="Toto je info" label="ℹ️" />
        </div>
      </section>

      {/* Events */}
      <section style={{ marginBottom: 40 }}>
        <h2>Events</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button
            colorScheme="primary"
            onClick={() => alert("Clicked!")}
          >
            Click Me
          </Button>
        </div>
      </section>

      {/* Combinations */}
      <section style={{ marginBottom: 40 }}>
        <h2>Combinations</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button
            colorScheme="success"
            icon={<span>✓</span>}
            iconPosition="left"
            tooltip="Uložit změny"
            onClick={() => console.log("Save")}
          >
            Save Changes
          </Button>
          <Button
            colorScheme="danger"
            icon={<span>✕</span>}
            iconPosition="left"
            tooltip="Zrušit"
            onClick={() => console.log("Cancel")}
          >
            Cancel
          </Button>
          <Button
            colorScheme="warning"
            isPending
            icon={<span>⏳</span>}
            iconPosition="right"
          >
            Processing...
          </Button>
        </div>
      </section>

      {/* Remove Default Style */}
      <section style={{ marginBottom: 40 }}>
        <h2>Custom Styling</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button
            removeDefaultStyle
            style={{
              padding: "8px 16px",
              backgroundColor: "#6B21A8",
              color: "white",
              border: "2px solid #A21CAF",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Custom Style
          </Button>
        </div>
      </section>
    </div>
  );
}

export default App;
